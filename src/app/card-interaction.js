import { updateCompleted } from "./update-completed";
import { updatePriority } from "./update-priority";
import { deleteCard } from "./delete-card";
import { editCard } from "./edit-card";
import { clearTasksByCategoryInNav, displayTasksByCategoryInNav } from "./display-tasks-in-nav";
import { displayChosenProjectInMain } from "./display-chosen-library";

export const listenToCard = (refNumber) => {
    
    const card = document.querySelector(`[data-ref="${refNumber}"]`);
    const iconCompleted = card.querySelector(".card__completed");
    const iconPriority = card.querySelector(".card__priority");
    const iconEdit = card.querySelector(".card__edit");
    const iconDelete = card.querySelector(".card__delete");
    const cardProject = card.querySelector(".card__project");

    iconCompleted.addEventListener('click', () => {
        updateCompleted(refNumber);
    });

    iconPriority.addEventListener('click', () => {
        updatePriority(refNumber);
    });

    iconEdit.addEventListener('click', () => {
        editCard(refNumber);
    });

    iconDelete.addEventListener('click', () => {
        deleteCard(refNumber);
    });

    cardProject.addEventListener('click', () => {
        let tasksByProject = JSON.parse(localStorage.getItem("tasksByProject"));
        let refNumber;
        const projectTitle = cardProject.textContent
        tasksByProject.forEach(task => {
            if (task.projectTitle === projectTitle) {
                refNumber = task.ref;
            }
        })
        clearTasksByCategoryInNav();
        displayTasksByCategoryInNav(refNumber, projectTitle)
        displayChosenProjectInMain("Project", projectTitle);   
    });
}