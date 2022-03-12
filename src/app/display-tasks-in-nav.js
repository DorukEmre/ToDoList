import { compareAsc, parseISO } from "date-fns";
import fileIcon from "../assets/file-outline-18.png";
import { tasksNavListeners } from "./nav-listeners";
import { retrieveMyTasksFromLocalStorage } from "./storage-management";

export const displayTasksByCategoryInNav = (ref, projectTitle) => {
     
    const myTasks = retrieveMyTasksFromLocalStorage();
    if (myTasks === []) { return };

    let listOfTasksToBeDisplayed = [];

    myTasks.forEach( task => {
        if (task.projectTitle === projectTitle) {
            listOfTasksToBeDisplayed.push(task)  
        } 
    });
    
    // sort by date
    listOfTasksToBeDisplayed.sort((a, b) => {       
        if (compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)) === -1) {
          return -1;
        } else if (compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)) === 1) {
          return 1;
        } else if (compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)) === 0) {
        return 0;
        }
    });

    let projectLi = "";
    if (projectTitle !== "") {
        projectLi = document.querySelector(`[data-cat="${ref}"]`);
    } else if (projectTitle === "") {
        projectLi = document.querySelector(".uncategorised");
    } 

    const tasksUl = document.createElement("ul");
    tasksUl.classList.add("tasks-list")
    projectLi.appendChild(tasksUl);

    for (let i = 0; i < listOfTasksToBeDisplayed.length; i++) {

        const tasksLi = document.createElement("li");
        const icon = document.createElement("img");
        const taskTitle = document.createElement("p");

        icon.src = fileIcon;
        taskTitle.textContent = listOfTasksToBeDisplayed[i].taskTitle;
        if (listOfTasksToBeDisplayed[i].completed) { 
            tasksLi.classList.add("completed");
        };
        if (!listOfTasksToBeDisplayed[i].completed && listOfTasksToBeDisplayed[i].highPriority) { 
            tasksLi.classList.add("priority");
        };

        tasksUl.appendChild(tasksLi);
        tasksLi.appendChild(icon);
        tasksLi.appendChild(taskTitle);

        tasksNavListeners(listOfTasksToBeDisplayed[i], tasksLi);
    }
};

export const clearTasksByCategoryInNav = () => {
    const tasksList = document.querySelector(".tasks-list");
    if (tasksList === null) { return };
    tasksList.remove();
}