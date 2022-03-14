import { addTaskToLibrary } from "./library-management";
import { createCard } from "./create-card";
import { fillCard } from "./fill-card";
import { hideAddTaskForm } from "./form-management";
import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import { populateProjectsInNav } from "./populate-nav-projects";
import { displayChosenProjectInMain } from "./display-chosen-library";
import { clearTasksByCategoryInNav, displayTasksByCategoryInNav } from "./display-tasks-in-nav";
import { format } from "date-fns";

export const userAddTask = () => {
    const addTaskForm = document.querySelector("#add-task-form");
    const projectTitle = addTaskForm.elements['form-projectTitle'].value;
    const taskTitle = addTaskForm.elements['form-taskTitle'].value;
    let dueDate = addTaskForm.elements['form-dueDate'].value;
    const description = addTaskForm.elements['form-description'].value;
    const formPriority = addTaskForm.elements['form-priority'].value;
    const highPriority = (formPriority === "Yes") ? true : false;
    const myTasks = retrieveMyTasksFromLocalStorage();
    
    let refNumberOfNewTask = 0;
    // (ref of new book) is (highest ref of myLibrary + 1)
    if (myTasks.length > 0) {
        refNumberOfNewTask = (myTasks.reduce((a, b) => (a.ref > b.ref) ? a : b).ref) + 1;
    }
    
    if (dueDate === "") {
        dueDate = format(new Date(), 'yyyy-MM-dd');
    }

    addTaskToLibrary(refNumberOfNewTask, projectTitle, taskTitle, description, dueDate, highPriority, false);
    createCard(refNumberOfNewTask);
    fillCard(refNumberOfNewTask);
    hideAddTaskForm();

    populateProjectsInNav();
    clearTasksByCategoryInNav();

    let catNumber = 0;
    if (projectTitle === "") {
        displayTasksByCategoryInNav("", "");
    } else if (projectTitle !== "") {
        let tasksByProject = JSON.parse(localStorage.getItem("tasksByProject"));
        tasksByProject.forEach(task => {
            if (task.projectTitle === projectTitle) {
                catNumber = task.ref;
            }
        })
        displayTasksByCategoryInNav(catNumber, projectTitle)
    };
  
    let type = "";
    (projectTitle === "") ? (type = "Uncategorised") : (type = "Project");
    displayChosenProjectInMain(type, projectTitle);
}
