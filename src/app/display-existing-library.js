import { retrieveMyTasksFromLocalStorage } from "./library-management";
import { createCard } from "./create-card";
import { fillCard } from "./fill-card";


export const displayExistingLibrary = () => {
    
    const myTasks = retrieveMyTasksFromLocalStorage();
    if (myTasks === []) { return };
    for (let i = 0; i < myTasks.length; i++) {
        createCard(myTasks[i].ref);
        fillCard(myTasks[i].ref);
    }
};