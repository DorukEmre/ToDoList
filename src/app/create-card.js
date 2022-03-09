import { listenToCard } from "./card-interaction";
import editIcon from "../assets/square-edit-outline.png";
import deleteIcon from "../assets/trash-can-outline.png";

export const createCard = (refNumber) => {

    const container = document.querySelector(".main__container");
    const card = document.createElement("section");
    card.classList.add("card");
    card.dataset.ref = `${refNumber}`;
    const header = document.createElement("header");
    header.classList.add("card__header");
    const headerLeft = document.createElement("section");
    const headerRight = document.createElement("section");
    const iconCompleted = document.createElement("img");
    iconCompleted.classList.add("card__completed");
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card__title");
    const projectTitle = document.createElement("p");
    projectTitle.classList.add("card__project");
    const cardDueDate = document.createElement("p");
    cardDueDate.classList.add("card__dueDate");
    const iconPriority = document.createElement("img");
    iconPriority.classList.add("card__priority");
    const iconEdit = document.createElement("img");
    iconEdit.classList.add("card__edit");
    iconEdit.src = editIcon;
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card__description");
    const footer = document.createElement("footer");
    footer.classList.add("card__footer");
    const iconDelete = document.createElement("img");
    iconDelete.classList.add("card__delete");
    iconDelete.src = deleteIcon;

    container.appendChild(card);
    card.appendChild(header);
    card.appendChild(cardDescription);
    card.appendChild(footer);
    header.appendChild(headerLeft);
    header.appendChild(headerRight);
    headerLeft.appendChild(iconCompleted);
    headerLeft.appendChild(cardTitle);
    headerRight.appendChild(projectTitle);
    headerRight.appendChild(cardDueDate);
    headerRight.appendChild(iconPriority);
    headerRight.appendChild(iconEdit);
    footer.appendChild(iconDelete);

    listenToCard(refNumber);

}
