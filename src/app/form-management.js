import { userAddTask } from "./add-task";
import { addBlockDiv, removeBlockDiv } from "./block-div";
import { editCard, submitEdit } from "./edit-card";

export const addTaskFormManagement = () => {
    const addTaskForm = document.querySelector("#add-task-form");

    document.querySelector(".add-task-button").addEventListener('click', displayAddTaskForm)
    document.querySelector(".cancel-add").addEventListener('click', hideAddTaskForm)
    document.querySelector(".submit-add").addEventListener('click', userAddTask)

    // Stop the form from submitting
    addTaskForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}

export const editFormManagement = () => {
    const editForm = document.querySelector("#edit-form");

    document.querySelector(".cancel-edit").addEventListener('click', hideEditForm)
    document.querySelector(".submit-edit").addEventListener('click', submitEdit)

    // Stop the form from submitting
    editForm.addEventListener('submit', function(e) {
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

export const hideEditForm = () => {
    const editSection = document.querySelector(".edit-section");
    document.getElementById('edit-form').reset();
    editSection.classList.remove("popup");
    removeBlockDiv();
}

export const displayEditForm = () => {
    const editSection = document.querySelector(".edit-section");
    editSection.classList.add("popup");
    addBlockDiv();
}    