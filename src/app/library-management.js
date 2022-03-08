import { Task } from "./task-creator";

export const addTaskToLibrary = (ref, projectTitle, taskTitle, description, dueDate, highPriority, completed) => {

    const myTasks = retrieveMyTasksFromLocalStorage();

    myTasks.push(new Task(ref, projectTitle, taskTitle, description, dueDate, highPriority, completed));

    saveMyTasksToLocalStorage(myTasks);
}

export const retrieveMyTasksFromLocalStorage = () => {
    let jsonString = localStorage.getItem("myTasks");
    let myTasks = JSON.parse(jsonString);
    if (myTasks === null) { myTasks = [] }
    console.log(myTasks)
    return myTasks
}
export const saveMyTasksToLocalStorage = (myTasks) => {
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
}
