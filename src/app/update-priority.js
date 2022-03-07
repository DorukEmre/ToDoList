import { fillCard } from "./fill-card";
import { myTasks } from "./tasks-management";

export const updatePriority = (refNumber) => {
    console.log(`you clicked on updatePriority for ${refNumber}`)
    const arrayNumber = myTasks.findIndex( item => item.ref === refNumber )
    
    myTasks[arrayNumber].highPriority = !myTasks[arrayNumber].highPriority;
    fillCard(refNumber);
}