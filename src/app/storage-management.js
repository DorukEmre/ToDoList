export const retrieveMyTasksFromLocalStorage = () => {
    let jsonString = localStorage.getItem("myTasks");
    let myTasks = JSON.parse(jsonString);
    if (myTasks === null) { myTasks = [] }
    return myTasks
}
export const saveMyTasksToLocalStorage = (myTasks) => {
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
}