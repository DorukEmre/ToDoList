import { Category } from "./category-creator";
import { removeAllChildNodes } from "./remove-all-child-nodes";
import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import folderIcon from "../assets/folder-outline-24.png";
import { countTasksByDate, countUncategorisedTasks } from "./count-tasks";
import { projectNavListeners } from "./nav-listeners";


export const populateProjectsInNav  = () => {
        
    const filterTasksByProjectTitle = () => {

        const myTasks = retrieveMyTasksFromLocalStorage();
        const filteredProjectTitles = [];

        myTasks.forEach(task => {
            if (!filteredProjectTitles.includes(task.projectTitle)
            && task.projectTitle !== "") {
                filteredProjectTitles.push(task.projectTitle)
            } 
            filteredProjectTitles.sort((a, b) => {
                const projectA = a.toUpperCase(); 
                const projectB = b.toUpperCase(); 
                if (projectA < projectB) {
                  return -1;
                }
                if (projectA > projectB) {
                  return 1;
                }
              });
        });

        let tasksByProject = []

        for ( let i = 0; i < filteredProjectTitles.length; i++) {
            const project = filteredProjectTitles[i];
            let frequency = myTasks.filter((task) => (task.projectTitle === project)).length;
            tasksByProject.push(new Category(i, project, frequency));
        }

        localStorage.setItem("tasksByProject", JSON.stringify(tasksByProject));

        return  { tasksByProject }
    }

    const displayCategoryByDateInNav = (() => {
        const today = document.querySelector(".today")
        const thisWeek = document.querySelector(".week")
        const upcoming = document.querySelector(".upcoming")
        const past = document.querySelector(".past")
        const numberItemInToday = today.querySelector("span");
        const numberItemInThisWeek = thisWeek.querySelector("span");
        const numberItemInUpcoming = upcoming.querySelector("span");
        const numberItemInPast = past.querySelector("span");
        numberItemInToday.textContent = countTasksByDate("Today");
        numberItemInThisWeek.textContent = countTasksByDate("Next seven days");;
        numberItemInUpcoming.textContent = countTasksByDate("Upcoming tasks");
        numberItemInPast.textContent = countTasksByDate("Past");
    })();

    const displayUncategorisedInNav = (() => {
        const uncategorised = document.querySelector(".uncategorised");
        const numberItemInCategory = uncategorised.querySelector("span");
        numberItemInCategory.textContent = countUncategorisedTasks();
    })();

    const displayProjectsInNav = (() => {
        const projectList = document.querySelector(".project-list");
        removeAllChildNodes(projectList);
        
        const tasksByProject = filterTasksByProjectTitle().tasksByProject;

        for ( let i = 0; i < tasksByProject.length; i++) {

            const li = document.createElement("li");
            const section = document.createElement("section");
            const image = document.createElement("img");
            const categoryName = document.createElement("p");
            const numberItemInCategory = document.createElement("span");

            li.dataset.cat= tasksByProject[i].ref;
            categoryName.textContent = tasksByProject[i].projectTitle;
            numberItemInCategory.textContent = tasksByProject[i].frequency;
            image.src = folderIcon;  

            projectList.appendChild(li);
            li.appendChild(section);
            section.appendChild(image);
            section.appendChild(categoryName);
            section.appendChild(numberItemInCategory);

            projectNavListeners(tasksByProject[i], section);            
        }
    })();
}