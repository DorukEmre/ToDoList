import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import flagHighPriority from "../assets/flag-variant-high.png";
import flagLowPriority from "../assets/flag-variant-outline.png";
import completedFalse from "../assets/checkbox-blank-circle-outline.png";
import completedTrue from "../assets/checkbox-marked-circle-outline.png";

export const fillCard = (refNumber) => {

    const myTasks = retrieveMyTasksFromLocalStorage();
    let arrayNumber = myTasks.findIndex( item => item.ref === refNumber )

    const card = document.querySelector(`[data-ref="${refNumber}"]`);
    const iconCompleted = card.querySelector(".card__completed");
    const cardTitle = card.querySelector(".card__title");
    const cardDueDate = card.querySelector(".card__dueDate");
    const iconPriority = card.querySelector(".card__priority");
    const cardDescription = card.querySelector(".card__description");

    cardTitle.textContent = myTasks[arrayNumber].taskTitle;
    cardDescription.textContent = myTasks[arrayNumber].description;
    cardDueDate.textContent = myTasks[arrayNumber].dueDate;

    if (myTasks[arrayNumber].highPriority) {
        iconPriority.src = flagHighPriority;
    } else {
        iconPriority.src = flagLowPriority;
    }

    if (myTasks[arrayNumber].completed) {
        iconCompleted.src = completedTrue;
        card.classList.add("isDone");
    } else {
        iconCompleted.src = completedFalse;
        card.classList.remove("isDone");
    }
}