export class Task {
    constructor (ref, projectTitle, taskTitle, description, dueDate, highPriority, completed) {
        this.ref = ref
        this.projectTitle = projectTitle
        this.taskTitle = taskTitle
        this.description = description
        this.dueDate = dueDate
        this.highPriority = highPriority
        this.completed = completed
    }
}