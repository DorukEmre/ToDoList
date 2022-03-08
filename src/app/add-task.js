import { addTaskToLibrary } from "./library-management";
import { createCard } from "./create-card";
import { fillCard } from "./fill-card";
import { hideAddTaskForm } from "./form-management";
import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import { populateProjectsInNav } from "./populate-nav-projects";

export const userAddTask = () => {
    const addTaskForm = document.querySelector("#add-task-form");
    const projectTitle = addTaskForm.elements['form-projectTitle'].value;
    const taskTitle = addTaskForm.elements['form-taskTitle'].value;
    const dueDate = addTaskForm.elements['form-dueDate'].value;
    const description = addTaskForm.elements['form-description'].value;
    const formPriority = addTaskForm.elements['form-priority'].value;
    const highPriority = (formPriority === "Yes") ? true : false;
    const myTasks = retrieveMyTasksFromLocalStorage();
    
    let refNumberOfNewTask = 0;
    // (ref of new book) is (highest ref of myLibrary + 1)
    if (myTasks.length > 0) {
        refNumberOfNewTask = (myTasks.reduce((a, b) => (a.ref > b.ref) ? a : b).ref) + 1;
    }

    addTaskToLibrary(refNumberOfNewTask, projectTitle, taskTitle, description, dueDate, highPriority, false);
    createCard(refNumberOfNewTask);
    fillCard(refNumberOfNewTask);
    hideAddTaskForm();
    populateProjectsInNav();
}
