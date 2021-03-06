import { storageManagementButtons } from "./storage-management-buttons";
import { displayExistingLibrary } from "./display-existing-library";
import { addTaskFormManagement, editFormManagement } from "./form-management";
import { populateProjectsInNav } from "./populate-nav-projects";
import { navListeners } from "./nav-listeners";

export const start = () => {

    displayExistingLibrary();

    addTaskFormManagement();
    editFormManagement();
    storageManagementButtons();

    populateProjectsInNav();
    navListeners(); 

    const setTodaysDate = (() => {
        const dueDate = document.querySelector("#form-dueDate");
        dueDate.valueAsDate = new Date();
    })();
}