import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import { createCard } from "./create-card";
import { fillCard } from "./fill-card";
import { parseISO, compareAsc } from 'date-fns'

export const displayExistingLibrary = () => {
    
    const myTasks = retrieveMyTasksFromLocalStorage();
    if (myTasks === []) { return };

    myTasks.sort((a, b) => {       
        if (compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)) === -1) {
          return -1;
        } else if (compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)) === 1) {
          return 1;
        } else if (compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)) === 0) {
        return 0;
        }
    });

    for (let i = 0; i < myTasks.length; i++) {
        createCard(myTasks[i].ref);
        fillCard(myTasks[i].ref);
    }
};