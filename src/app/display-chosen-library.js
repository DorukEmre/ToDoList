import { createCard } from "./create-card";
import { fillCard } from "./fill-card";
import { myTasks } from "./tasks-management";


export const displayChosenLibrary = () => {

    for (let i = 0; i < myTasks.length; i++) {
        createCard(myTasks[i].ref);
        fillCard(myTasks[i].ref);
    }
};