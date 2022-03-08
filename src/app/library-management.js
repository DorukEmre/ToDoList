import { retrieveMyTasksFromLocalStorage, saveMyTasksToLocalStorage } from "./storage-management";
import { Task } from "./task-creator";

export const addTaskToLibrary = (ref, projectTitle, taskTitle, description, dueDate, highPriority, completed) => {

    const myTasks = retrieveMyTasksFromLocalStorage();

    myTasks.push(new Task(ref, projectTitle, taskTitle, description, dueDate, highPriority, completed));

    saveMyTasksToLocalStorage(myTasks);
}
