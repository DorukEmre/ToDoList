import { Category } from "./category-creator";
import { removeAllChildNodes } from "./remove-all-child-nodes";
import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import folderIcon from "../assets/folder-outline-24.png";
import fileIcon from "../assets/file-outline-18.png";
import { displayChosenProjectInMain } from "./display-chosen-library";


export const populateProjectsInNav  = () => {
        
    const filterTasksByProjectTitle = () => {

        const myTasks = retrieveMyTasksFromLocalStorage();
        const filteredProjectTitles = [];
        const uncategorisedTitles = [];

        myTasks.forEach(task => {
            if (!filteredProjectTitles.includes(task.projectTitle)
            && task.projectTitle !== "") {
                filteredProjectTitles.push(task.projectTitle)
            } else if (task.projectTitle === "") {
                uncategorisedTitles.push(task.projectTitle)
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

        return  { tasksByProject, uncategorisedTitles }
    }

    const displayUncategorisedInNav = (() => {
        const uncategorised = document.querySelector(".uncategorised");
        const numberItemInCategory = uncategorised.querySelector("span");
        const uncategorisedTitles = filterTasksByProjectTitle().uncategorisedTitles;
        numberItemInCategory.textContent = uncategorisedTitles.length;
    })();

    const displayProjectsInNav = (() => {
        const projectList = document.querySelector(".project-list");
        removeAllChildNodes(projectList);
        
        const tasksByProject = filterTasksByProjectTitle().tasksByProject;

        for ( let i = 0; i < tasksByProject.length; i++) {

            const li = document.createElement("li");
            const image = document.createElement("img")
            const categoryName = document.createElement("p");
            const numberItemInCategory = document.createElement("span");

            li.dataset.cat= tasksByProject[i].ref;
            categoryName.textContent = tasksByProject[i].projectTitle;
            numberItemInCategory.textContent = tasksByProject[i].frequency;
            image.src = folderIcon;  

            projectList.appendChild(li);
            li.appendChild(image);
            li.appendChild(categoryName);
            li.appendChild(numberItemInCategory);

            li.addEventListener('click', () => {
                displayChosenProjectInMain("Project", tasksByProject[i].projectTitle);                
            })
        }
    })();
}

