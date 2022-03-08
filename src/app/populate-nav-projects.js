import { Category } from "./category-creator";
import { removeAllChildNodes } from "./remove-all-child-nodes";
import { retrieveMyTasksFromLocalStorage } from "./storage-management";
import folderIcon from "../assets/folder-outline-24.png";
import fileIcon from "../assets/file-outline-18.png";


export const populateProjectsInNav  = () => {

    const removeAllProjectsInNav = () => {
        const projectList = document.querySelector(".project-list");
        removeAllChildNodes(projectList);
    }
        
    const filterTasksByProjectTitle = () => {

        removeAllProjectsInNav();

        const myTasks = retrieveMyTasksFromLocalStorage();
        const filteredProjectTitles = [];

        myTasks.forEach(task => {
            if (!filteredProjectTitles.includes(task.projectTitle)) {
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

        console.log(filteredProjectTitles);
        let tasksByProject = []

        for ( let i = 0; i < filteredProjectTitles.length; i++) {
            const project = filteredProjectTitles[i];
            let frequency = myTasks.filter((task) => (task.projectTitle === project)).length;
            tasksByProject.push(new Category(i, project, frequency));
        }

        localStorage.setItem("tasksByProject", JSON.stringify(tasksByProject));
        console.log(tasksByProject);
        return tasksByProject
    }

    const displayProjectsInNav = (() => {

        const tasksByProject = filterTasksByProjectTitle();
        const projectList = document.querySelector(".project-list");

        for ( let i = 0; i < tasksByProject.length; i++) {

            const li = document.createElement("li");
            const image = document.createElement("img")
            const categoryName = document.createElement("p");
            const numberItemCategory = document.createElement("span");

            li.dataset.cat= tasksByProject[i].ref;
            categoryName.textContent = tasksByProject[i].projectTitle;
            numberItemCategory.textContent = tasksByProject[i].frequency;
            
            if (tasksByProject[i].projectTitle === "") {
                image.src = fileIcon;
            } else if (tasksByProject[i].projectTitle !== "") {
                image.src = folderIcon;                
            }

            projectList.appendChild(li);
            li.appendChild(image);
            li.appendChild(categoryName);
            li.appendChild(numberItemCategory);
        }
    })();
}

