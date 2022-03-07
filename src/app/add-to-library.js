import { myTasks, Task } from "./tasks-management";

export function addTaskToLibrary(ref, projectTitle, taskTitle, description, dueDate, highPriority, completed) {
    myTasks.push(new Task(ref, projectTitle, taskTitle, description, dueDate, highPriority, completed)) 
}
