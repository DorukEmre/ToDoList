import { userAddTask } from "./add-task";
import { addBlockDiv, removeBlockDiv } from "./block-div";

export const addTaskFormManagement = () => {
    const addTaskForm = document.querySelector("#add-task-form");

    document.querySelector(".add-task-button").addEventListener('click', displayAddTaskForm)
    document.querySelector(".cancel").addEventListener('click', hideAddTaskForm)
    document.querySelector(".submit").addEventListener('click', userAddTask)

    // Stop the form from submitting
    addTaskForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}

export const hideAddTaskForm = () => {
    const addTaskSection = document.querySelector(".add-task-section");
    document.getElementById('add-task-form').reset();
    addTaskSection.classList.remove("popup");
    removeBlockDiv();
}

export const displayAddTaskForm = () => {
    const addTaskSection = document.querySelector(".add-task-section");
    addTaskSection.classList.add("popup");
    addBlockDiv();
}    