import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import { addDays, format, isAfter, isBefore, isWithinInterval, parseISO } from 'date-fns'



export const countTasksByDate = (typeOfDate) => {
        
    const myTasks = retrieveMyTasksFromLocalStorage();
    if (myTasks === []) { return };

    let counter = 0;

    myTasks.forEach( task => {

        if (typeOfDate === "Today"
        && task.dueDate === format(new Date(),'yyyy-MM-dd')) {
                counter++;

        } else if (typeOfDate === "Next seven days"
        && isWithinInterval(parseISO(task.dueDate), {
                start: new Date(),
                end: addDays(new Date(), 7)
            })) {
                counter++;

        } else if (typeOfDate === "Upcoming tasks"
        && isAfter(parseISO(task.dueDate), parseISO(format(new Date(),'yyyy-MM-dd')))) {
                counter++;

        } else if (typeOfDate === "Past"
        && isBefore(parseISO(task.dueDate), parseISO(format(new Date(),'yyyy-MM-dd')))) {
                counter++;
        };
    });
    return counter;
};

export const countUncategorisedTasks = () => {
        
    const myTasks = retrieveMyTasksFromLocalStorage();
    if (myTasks === []) { return };

    let counter = 0;
    
    myTasks.forEach(task => {
        if (task.projectTitle === "") {
            counter++;
        }
    });

    return counter;
};