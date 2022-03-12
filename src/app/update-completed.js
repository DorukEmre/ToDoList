import { updateTasksInNavIfDisplayed } from "./display-tasks-in-nav";
import { fillCard } from "./fill-card";
import { retrieveMyTasksFromLocalStorage, saveMyTasksToLocalStorage } from "./storage-management";

export const updateCompleted = (refNumber) => {
    const myTasks = retrieveMyTasksFromLocalStorage();
    const arrayNumber = myTasks.findIndex( item => item.ref === refNumber )

    myTasks[arrayNumber].completed = !myTasks[arrayNumber].completed;
    
    saveMyTasksToLocalStorage(myTasks);
    fillCard(refNumber);

    updateTasksInNavIfDisplayed();
}