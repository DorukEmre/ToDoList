import { myTasks, Task } from "./tasks-management";

export function addTaskToLibrary(projectTitle, taskTitle, description, dueDate, priority, isDone, ref) {
    myTasks.push(new Task(projectTitle, taskTitle, description, dueDate, priority, isDone, ref)) 
}
