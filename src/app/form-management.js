import { myTasks } from "./tasks-management";
import { addTaskToLibrary } from "./add-to-library";
import { createCard } from "./create-card";
import { fillCard } from "./fill-card";
import { addBlockDiv, removeBlockDiv } from "./block-div";

export const addTaskFormManagement = () => {
    const addTaskSection = document.querySelector(".add-task-section");
    const addTaskForm = document.querySelector("#add-task-form");

    function hideAddTaskForm() {
        document.getElementById('add-task-form').reset();
        addTaskSection.classList.remove("popup");
        removeBlockDiv();
    }
    function displayAddTaskForm() {
        addTaskSection.classList.add("popup");
        addBlockDiv();
    }    

    function userAddTask() {
        const projectTitle = addTaskForm.elements['form-projectTitle'].value;
        const taskTitle = addTaskForm.elements['form-taskTitle'].value;
        const dueDate = addTaskForm.elements['form-dueDate'].value;
        const description = addTaskForm.elements['form-description'].value;
        const formPriority = addTaskForm.elements['form-priority'].value;
        const highPriority = (formPriority === "Yes") ? true : false;
        
        let refNumberOfNewTask = 0;
        // (ref of new book) is (highest ref of myLibrary + 1)
        if (myTasks.length > 0) {
            refNumberOfNewTask = (myTasks.reduce((a, b) => (a.ref > b.ref) ? a : b).ref) + 1;
        }

        addTaskToLibrary(refNumberOfNewTask, projectTitle, taskTitle, description, dueDate, highPriority, false);
        createCard(refNumberOfNewTask);
        fillCard(refNumberOfNewTask);
        hideAddTaskForm();
    }

    document.querySelector(".add-task-button").addEventListener('click', displayAddTaskForm)
    document.querySelector(".cancel").addEventListener('click', hideAddTaskForm)
    document.querySelector(".submit").addEventListener('click', userAddTask)

    // Stop the form from submitting
    addTaskForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}