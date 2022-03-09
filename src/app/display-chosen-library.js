import { createCard } from "./create-card";
import { fillCard } from "./fill-card";
import { removeAllChildNodes } from "./remove-all-child-nodes";
import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import { format, parseISO, compareAsc } from 'date-fns'


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
    if (type !== "Date") {
        myTasks.forEach( task => {
            if (task.projectTitle === libraryProjectTitle) {
                projectToBeDisplayed.push(task)
                console.log(task.dueDate)
                console.log(format(new Date(),'yyyy-MM-dd'))
            }
        })
    } else if (libraryProjectTitle === "Today") {
        myTasks.forEach( task => {
            if (task.dueDate === format(new Date(),'yyyy-MM-dd')) {
                projectToBeDisplayed.push(task)
            }
        })
    }
    
    
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