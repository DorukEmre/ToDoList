import { createCard } from "./create-card";
import { fillCard } from "./fill-card";
import { retrieveMyTasksFromLocalStorage } from "./library-management";


export const displayChosenLibrary = () => {

    const myTasks = retrieveMyTasksFromLocalStorage();
    if (myTasks === []) { return };
    for (let i = 0; i < myTasks.length; i++) {
        createCard(myTasks[i].ref);
        fillCard(myTasks[i].ref);
    }
};