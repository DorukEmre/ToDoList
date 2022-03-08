import { fillCard } from "./fill-card";
import { retrieveMyTasksFromLocalStorage, saveMyTasksToLocalStorage } from "./library-management";

export const updatePriority = (refNumber) => {
    console.log(`you clicked on updatePriority for ${refNumber}`)
    
    const myTasks = retrieveMyTasksFromLocalStorage();
    const arrayNumber = myTasks.findIndex( item => item.ref === refNumber )
    
    myTasks[arrayNumber].highPriority = !myTasks[arrayNumber].highPriority;
   
    saveMyTasksToLocalStorage(myTasks);
    fillCard(refNumber);
}