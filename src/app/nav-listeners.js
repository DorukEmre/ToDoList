import { displayChosenProjectInMain } from "./display-chosen-library"

export const navListeners  = () => {

    const uncategorised = document.querySelector(".uncategorised")
    uncategorised.addEventListener('click', () => {
        displayChosenProjectInMain("Uncategorised", "");            
    })

    const today = document.querySelector(".today")
    today.addEventListener('click', () => {
        displayChosenProjectInMain("Date", "Today");            
    })

    const thisWeek = document.querySelector(".week")
    thisWeek.addEventListener('click', () => {
        displayChosenProjectInMain("Date", "This week");            
    })

    const upcoming = document.querySelector(".upcoming")
    upcoming.addEventListener('click', () => {
        displayChosenProjectInMain("Date", "Upcoming tasks");            
    })

}