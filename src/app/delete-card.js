import { retrieveMyTasksFromLocalStorage, saveMyTasksToLocalStorage } from "./storage-management";
import { populateProjectsInNav } from "./populate-nav-projects";

export const deleteCard = (refNumber) => {
    console.log(`you clicked on deleteCard for ${refNumber}`)
    const myTasks = retrieveMyTasksFromLocalStorage();
    const arrayNumber = myTasks.findIndex( item => item.ref === refNumber )
    const cardToDelete = document.querySelector(`[data-ref="${refNumber}"]`);
    
    myTasks.splice(arrayNumber, 1)
    saveMyTasksToLocalStorage(myTasks);
    cardToDelete.remove();
    populateProjectsInNav();
}