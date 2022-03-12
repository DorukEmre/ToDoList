import { addDays, format, subDays } from "date-fns";
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
    clearLocalStorage();
    // demo tasks
    addTaskToLibrary(1, "Housekeeping", "Take the bins out", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veniam possimus harum architecto atque nam!", format(new Date(), 'yyyy-MM-dd').toString(), true, true);
    addTaskToLibrary(2, "Housekeeping", "Hoover living room", "Lorem ipsum dolor sit amet consectetur. Eum veniam possimus harum architecto atque adipisicing elit. Eum veniam possimus harum architecto atque nam!", format(new Date(), 'yyyy-MM-dd').toString(), false, false);
    addTaskToLibrary(3, "Housekeeping", "Clean the oven", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veniam possimus harum architecto atque nam!", format(addDays(new Date(), 3), 'yyyy-MM-dd').toString(), true, false);
    addTaskToLibrary(4, "Gardening", "Weed front patch", "", format(new Date(), 'yyyy-MM-dd').toString(), false, true);
    addTaskToLibrary(5, "Gardening", "Turn compost", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias et debitis quod, cum recusandae, officiis accusamus mollitia ea, sequi odio fuga vero dolorem.", format(addDays(new Date(), 9), 'yyyy-MM-dd').toString(), true, false);
    addTaskToLibrary(6, "", "Call mum", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur.", format(addDays(new Date(), 15), 'yyyy-MM-dd').toString(), false, false);
    addTaskToLibrary(7, "", "Change bike chain", "Atque adipisicing elit.", format(addDays(new Date(), 28), 'yyyy-MM-dd').toString(), false, false);
    addTaskToLibrary(8, "Housekeeping", "Paint cupboard", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit tempora odio dolorum vitae.", format(subDays(new Date(), 12), 'yyyy-MM-dd').toString(), false, true);
    addTaskToLibrary(9, "Gardening", "Build raised beds", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id maiores dicta labore blanditiis ratione ipsum rem adipisci et!", format(subDays(new Date(), 3), 'yyyy-MM-dd').toString(), false, true);

    displayExistingLibrary();
    populateProjectsInNav();
}

const clearLocalStorage = () => {
    localStorage.clear();
    const mainContainer = document.querySelector(".main__container")
    removeAllChildNodes(mainContainer);
    populateProjectsInNav();
}