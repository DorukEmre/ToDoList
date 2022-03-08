import { retrieveMyTasksFromLocalStorage } from "./library-management";

export const editCard = (refNumber) => {

    const myTasks = retrieveMyTasksFromLocalStorage();

    console.log(`you clicked on editCard for ${refNumber}`)
}