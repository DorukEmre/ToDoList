import { myTasks } from "./tasks-management";

export const deleteCard = (refNumber) => {
    console.log(`you clicked on deleteCard for ${refNumber}`)
    const arrayNumber = myTasks.findIndex( item => item.ref === refNumber )
    const cardToDelete = document.querySelector(`[data-ref="${refNumber}"]`);
    
    myTasks.splice(arrayNumber, 1)
    cardToDelete.remove();
}