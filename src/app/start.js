import { storageManagementButtons } from "./storage-management-buttons";
import { displayExistingLibrary } from "./display-existing-library";
import { addTaskFormManagement } from "./form-management";
import { populateProjectsInNav } from "./populate-nav-projects";
import { navListeners } from "./nav-listeners";

export const start = () => {

    displayExistingLibrary();

    addTaskFormManagement();
    storageManagementButtons();

    populateProjectsInNav();
    navListeners();
}