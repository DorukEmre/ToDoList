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