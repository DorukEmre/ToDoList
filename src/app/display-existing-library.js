import { addTaskToLibrary } from "./add-to-library";
import { createCard } from "./create-card";
import { fillCard } from "./fill-card";
import { myTasks } from "./tasks-management";


export const displayExistingLibrary = () => {
    // demo tasks
    addTaskToLibrary("New Website", "Find designer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veniam possimus harum architecto atque nam!", "10/03/2022", true, true, "1")
    addTaskToLibrary("New Website", "Find host", "Lorem ipsum dolor sit amet consectetur. Eum veniam possimus harum architecto atque adipisicing elit. Eum veniam possimus harum architecto atque nam!", "15/03/2022", false, false, "2")
    addTaskToLibrary("Housekeeping", "Groceries", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veniam possimus harum architecto atque nam!", "18/03/2022", true, false, "3")
    addTaskToLibrary("New Website", "Take the bins out", "Atque adipisicing elit.", "11/05/2022", false, true, "4")

    for (let i = 0; i < myTasks.length; i++) {
        createCard(myTasks[i].ref);
        fillCard(myTasks[i].ref);
    }
};