import { displayExistingLibrary } from "./display-existing-library";
import { addTaskToLibrary } from "./library-management";
import { populateProjectsInNav } from "./populate-nav-projects";
import { removeAllChildNodes } from "./remove-all-child-nodes";

export const storageManagementButtons = () => {
    const addDemoTasksButton = document.querySelector(".demo-tasks");
    const clearLocalStorageButton = document.querySelector(".clear-library");

    addDemoTasksButton.addEventListener('click', addDemoTasks);
    clearLocalStorageButton.addEventListener('click', clearLocalStorage);
}

const addDemoTasks = () => {
    // demo tasks
    addTaskToLibrary(1, "New Website", "Find designer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veniam possimus harum architecto atque nam!", "10/03/2022", true, true)
    addTaskToLibrary(2, "New Website", "Find host", "Lorem ipsum dolor sit amet consectetur. Eum veniam possimus harum architecto atque adipisicing elit. Eum veniam possimus harum architecto atque nam!", "15/03/2022", false, false)
    addTaskToLibrary(3, "Housekeeping", "Groceries", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veniam possimus harum architecto atque nam!", "18/03/2022", true, false)
    addTaskToLibrary(4, "New Website", "Take the bins out", "Atque adipisicing elit.", "11/05/2022", false, true)

    displayExistingLibrary();
    populateProjectsInNav();
}

const clearLocalStorage = () => {
    localStorage.clear();
    const mainContainer = document.querySelector(".main__container")
    removeAllChildNodes(mainContainer);
    populateProjectsInNav();
}