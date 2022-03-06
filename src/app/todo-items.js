
export class Book {
    constructor (title, author, pages, read, ref) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.checklist = checklist
    }

    // set editReadStatus(arrayNumber) { 
    //     console.log("In editReadStatus " + arrayNumber)
    //     if (this.read === "Yes") {
    //         this.read = "No"
    //     } else if (this.read === "No") {
    //         this.read = "Yes"
    //     }
        
    //     this.displayBook(arrayNumber);        
    // }

    // displayBook(arrayNumber) {
    //     console.log("In displayBook " + arrayNumber)
    //     const cardToEdit = document.querySelector(`[data-ref="${this.ref}"]`);
    //     const pModTitle = cardToEdit.querySelector(".title");
    //     const pModAuthor = cardToEdit.querySelector(".author");
    //     const pModPages = cardToEdit.querySelector(".pages");
    //     const pModRead = cardToEdit.querySelector(".read");

    //     pModTitle.textContent = this.title;
    //     pModAuthor.textContent = this.author;
    //     pModPages.textContent = this.pages;
    //     pModRead.textContent = this.read;
    // }
}