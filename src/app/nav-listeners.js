import { displayChosenProjectInMain } from "./display-chosen-library"
import { clearTasksByCategoryInNav, displayTasksByCategoryInNav } from "./display-tasks-in-nav"

export const navListeners  = () => {

    const today = document.querySelector(".today")
    today.addEventListener('click', () => {
        clearTasksByCategoryInNav();
        displayChosenProjectInMain("Date", "Today");            
    });

    const thisWeek = document.querySelector(".week")
    thisWeek.addEventListener('click', () => {
        clearTasksByCategoryInNav();
        displayChosenProjectInMain("Date", "Next seven days");            
    });

    const upcoming = document.querySelector(".upcoming")
    upcoming.addEventListener('click', () => {
        clearTasksByCategoryInNav();
        displayChosenProjectInMain("Date", "Upcoming tasks");            
    });

    const past = document.querySelector(".past")
    past.addEventListener('click', () => {
        clearTasksByCategoryInNav();
        displayChosenProjectInMain("Date", "Past tasks");            
    });

    const uncategorised = document.querySelector(".uncategorised")
    const section = uncategorised.querySelector("section")
    section.addEventListener('click', () => {
        clearTasksByCategoryInNav();
        displayTasksByCategoryInNav("", "");
        displayChosenProjectInMain("Uncategorised", "");            
    });
}

export const projectNavListeners  = (tasksByProject, section) => {
    section.addEventListener('click', () => {
        clearTasksByCategoryInNav();
        displayTasksByCategoryInNav(tasksByProject.ref, tasksByProject.projectTitle)
        displayChosenProjectInMain("Project", tasksByProject.projectTitle);                
    });
}

export const tasksNavListeners  = (listOfTasksToBeDisplayed, tasksLi) => {
    tasksLi.addEventListener('click', () => {   
        displayChosenProjectInMain("Task", listOfTasksToBeDisplayed.taskTitle);
    });
}