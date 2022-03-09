import { storageManagementButtons } from "./storage-management-buttons";
import { displayExistingLibrary } from "./display-existing-library";
import { addTaskFormManagement } from "./form-management";
import { populateProjectsInNav } from "./populate-nav-projects";
import { navListeners } from "./nav-listeners";
import { format } from "date-fns";

export const start = () => {

    displayExistingLibrary();

    addTaskFormManagement();
    storageManagementButtons();

    populateProjectsInNav();
    navListeners(); 

    const setTodaysDate = (() => {
        const dueDate = document.querySelector("#form-dueDate");
        dueDate.valueAsDate = new Date();
    })();
}