import { createCard } from "./create-card";
import { fillCard } from "./fill-card";
import { removeAllChildNodes } from "./remove-all-child-nodes";
import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import { addDays, compareAsc, format, isAfter, isBefore, isWithinInterval, parseISO } from 'date-fns'


export const displayChosenProjectInMain = (type, libraryProjectTitle) => {
    
    const mainContainer = document.querySelector(".main__container");
    removeAllChildNodes(mainContainer);

    const mainTitle = document.querySelector(".main__title");
    if (type === "Uncategorised") {
        mainTitle.textContent = "Uncategorised tasks"; 
    } else if (type === "Project" || type === "Date") {
        mainTitle.textContent = libraryProjectTitle;
    }
        
    const myTasks = retrieveMyTasksFromLocalStorage();
    if (myTasks === []) { return };

    let projectToBeDisplayed = [];

    myTasks.forEach( task => {
        if (type !== "Date"
        && task.projectTitle === libraryProjectTitle) {
                projectToBeDisplayed.push(task)
            
        } else if (libraryProjectTitle === "Today"
        && task.dueDate === format(new Date(),'yyyy-MM-dd')) {
                projectToBeDisplayed.push(task)
            
        } else if (libraryProjectTitle === "Next seven days"
        && isWithinInterval(parseISO(task.dueDate), {
                start: new Date(),
                end: addDays(new Date(), 7)
            })) {
                projectToBeDisplayed.push(task)

        } else if (libraryProjectTitle === "Upcoming tasks"
        && isAfter(parseISO(task.dueDate), parseISO(format(new Date(),'yyyy-MM-dd')))) {
                projectToBeDisplayed.push(task)
                
        } else if (libraryProjectTitle === "Past tasks"
        && isBefore(parseISO(task.dueDate), parseISO(format(new Date(),'yyyy-MM-dd')))) {
                projectToBeDisplayed.push(task)                
        }
    });
    
    // sort by date
    projectToBeDisplayed.sort((a, b) => {       
        if (compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)) === -1) {
          return -1;
        } else if (compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)) === 1) {
          return 1;
        } else if (compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)) === 0) {
        return 0;
        }
    });

    for (let i = 0; i < projectToBeDisplayed.length; i++) {
        createCard(projectToBeDisplayed[i].ref);
        fillCard(projectToBeDisplayed[i].ref);
    }
};