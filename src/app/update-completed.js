import { fillCard } from "./fill-card";
import { myTasks } from "./tasks-management";

export const updateCompleted = (refNumber) => {
    console.log(`you clicked on updateCompleted for ${refNumber}`)
    const arrayNumber = myTasks.findIndex( item => item.ref === refNumber )

    myTasks[arrayNumber].completed = !myTasks[arrayNumber].completed;
    fillCard(refNumber);
}