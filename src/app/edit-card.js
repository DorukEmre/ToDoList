import { displayChosenProjectInMain } from "./display-chosen-library";
import { clearTasksByCategoryInNav, displayTasksByCategoryInNav, updateTasksInNavIfDisplayed } from "./display-tasks-in-nav";
import { fillCard } from "./fill-card";
import { displayEditForm, hideEditForm } from "./form-management";
import { populateProjectsInNav } from "./populate-nav-projects";
import { retrieveMyTasksFromLocalStorage, saveMyTasksToLocalStorage } from "./storage-management";

export const editCard = (refNumber) => {

    displayEditForm();

    const myTasks = retrieveMyTasksFromLocalStorage();
    let arrayNumber = myTasks.findIndex( item => item.ref === refNumber );

    const currentProjectTitle = myTasks[arrayNumber].projectTitle;
    const currentTaskTitle = myTasks[arrayNumber].taskTitle;
    const currentDescription = myTasks[arrayNumber].description;
    const currentDueDate = myTasks[arrayNumber].dueDate;
    const currentPriority = myTasks[arrayNumber].highPriority;

    const editForm = document.querySelector("#edit-form");
    editForm.dataset.arrayNumber = arrayNumber;
    editForm.dataset.refNumber = refNumber;
    const projectTitleToEdit = editForm.querySelector("#edit-projectTitle");
    projectTitleToEdit.value = currentProjectTitle;
    const cardTitleToEdit = editForm.querySelector("#edit-taskTitle");
    cardTitleToEdit.value = currentTaskTitle;
    const cardDueDateToEdit = editForm.querySelector("#edit-dueDate");
    cardDueDateToEdit.value = currentDueDate
    const cardDescriptionToEdit = editForm.querySelector("#edit-description");
    cardDescriptionToEdit.value = currentDescription;

    const cardPriorityToEditYes = editForm.querySelector("#edit-priority-yes");
    const cardPriorityToEditNo = editForm.querySelector("#edit-priority-no");
    (currentPriority) ? cardPriorityToEditYes.checked = true
        : cardPriorityToEditNo.checked = true;
}

export const submitEdit = () => {
    const editForm = document.querySelector("#edit-form");
    const arrayNumber = parseInt(editForm.dataset.arrayNumber);
    const refNumber = parseInt(editForm.dataset.refNumber);
    const editedProjectTitle = editForm.elements['edit-projectTitle'].value;
    const editedTaskTitle = editForm.elements['edit-taskTitle'].value;
    const editedDueDate = editForm.elements['edit-dueDate'].value;
    const editedDescription = editForm.elements['edit-description'].value;
    const editedPriority = editForm.elements['edit-priority'].value;
    const highPriority = (editedPriority === "Yes") ? true : false;
    const myTasks = retrieveMyTasksFromLocalStorage();
    myTasks[arrayNumber].projectTitle = editedProjectTitle;
    myTasks[arrayNumber].taskTitle = editedTaskTitle;
    myTasks[arrayNumber].dueDate = editedDueDate;
    myTasks[arrayNumber].description = editedDescription;
    myTasks[arrayNumber].highPriority = highPriority;

    saveMyTasksToLocalStorage(myTasks);
    fillCard(refNumber);
    hideEditForm();

    populateProjectsInNav();
    clearTasksByCategoryInNav();

    let catNumber = 0;
    if (myTasks[arrayNumber].projectTitle === "") {
        displayTasksByCategoryInNav("", "");
    } else if (myTasks[arrayNumber].projectTitle !== "") {
        let tasksByProject = JSON.parse(localStorage.getItem("tasksByProject"));
        tasksByProject.forEach(task => {
            if (task.projectTitle === myTasks[arrayNumber].projectTitle) {
                catNumber = task.ref;
            }
        })
        displayTasksByCategoryInNav(catNumber, myTasks[arrayNumber].projectTitle)
    };
    
    let type = "";
    (myTasks[arrayNumber].projectTitle === "") ? (type = "Uncategorised") : (type = "Project");
    displayChosenProjectInMain(type, myTasks[arrayNumber].projectTitle);
}