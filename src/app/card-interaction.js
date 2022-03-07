import { updateCompleted } from "./update-completed";
import { updatePriority } from "./update-priority";
import { deleteCard } from "./delete-card";
import { editCard } from "./edit-card";

export const listenToCard = (refNumber) => {
    
    const card = document.querySelector(`[data-ref="${refNumber}"]`);
    const iconCompleted = card.querySelector(".card__completed");
    const iconPriority = card.querySelector(".card__priority");
    const iconEdit = card.querySelector(".card__edit");
    const iconDelete = card.querySelector(".card__delete");

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
}
