export const addBlockDiv = () => {
    const body = document.querySelector("body");
    const blockDiv = document.createElement("div");
    blockDiv.setAttribute("id", "blockDiv");
    const header = document.querySelector(".body__header");
    body.insertBefore(blockDiv, header);

    blockDiv.addEventListener('click', () => {
        document.getElementById('add-task-form').reset();
        const addTaskSection = document.querySelector(".add-task-section");
        addTaskSection.classList.remove("popup");
        removeBlockDiv();
    });
}

export const removeBlockDiv = () => {
    const blockDiv = document.querySelector("#blockDiv");
    blockDiv.remove();    
}