export const addBlockDiv = (which) => {
    const body = document.querySelector("body");
    const blockDiv = document.createElement("div");
    blockDiv.setAttribute("id", "blockDiv");
    const header = document.querySelector(".body__header");
    body.insertBefore(blockDiv, header);

    blockDiv.addEventListener('click', () => {
        document.getElementById(`${which}-form`).reset();
        const whichSection = document.querySelector(`.${which}-section`);
        whichSection.classList.remove("popup");
        removeBlockDiv();
    });
}

export const removeBlockDiv = () => {
    const blockDiv = document.querySelector("#blockDiv");
    blockDiv.remove();    
}