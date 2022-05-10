import { removeElementsByClassname, renderProjectTasks } from "./task"

// Project Class 
class Project {
    constructor(title, dueDate, priority) {
        this.title = title
        this.dueDate = dueDate
        this.priority = priority
        this.projectTasks = [];
    }
}

const projectContainer = document.getElementById('project-container')
const taskHeader = document.getElementById('task-header')
const defaultProject = new Project('Default Project', '2420-06-06', 'Low')
const projects = [defaultProject]
let selectedProject = ''
let correctIndex = 0

let i = 0;

//FUNCTIONS ----------------------------------------------------------------------

function createProjectCard(project) {    
        const projectCard = document.createElement('div')
        projectCard.className = 'project-card'
        projectContainer.appendChild(projectCard)
        projectCard.addEventListener('click', (e) => {
            if (e.target == deleteButton) {
                return
            } else if (e.target == projectCard) {
                taskHeader.textContent = `Tasks for ${e.target.firstChild.innerText}`
                selectedProject = e.target.firstChild.innerText
                console.log(e.target)
                findProject(projects)
                console.log(correctIndex)
                renderProjectTasks(projects[correctIndex].projectTasks)
            } else {
                taskHeader.textContent = `Tasks for ${e.target.parentElement.firstChild.innerText}`
                selectedProject = e.target.parentElement.firstChild.innerText
                console.log(e.target)
                findProject(projects)
                console.log(correctIndex)
                renderProjectTasks(projects[correctIndex].projectTasks)
            }  
        })
        
        const projectTitle = document.createElement('h3')
        projectTitle.innerHTML = project.title
        projectTitle.className = 'project-title'
        projectCard.appendChild(projectTitle);

        const deleteButton = document.createElement('img')
        deleteButton.src = '../assets/delete.svg'
        deleteButton.addEventListener('click', removeCard)
        projectCard.appendChild(deleteButton)
        deleteButton.className = 'project-deletebtn'
        // const deleteButton = document.createElement('button')
        // deleteButton.addEventListener('click', removeCard)
        // deleteButton.className = 'project-deletebtn'
        // deleteButton.innerText = 'x'
        // projectCard.appendChild(deleteButton);

        const projectDate = document.createElement('p')
        projectDate.innerText = project.dueDate
        projectDate.className = 'project-date'
        projectCard.appendChild(projectDate);   

        const projectPriority = document.createElement('p')
        projectPriority.innerText = project.priority
        projectPriority.className = 'project-priority'
        projectCard.appendChild(projectPriority); 
    }

    function renderProjects(projectArray) {
        for (i; i < projectArray.length; i++) {
            createProjectCard(projectArray[i])
        }
  }

    function removeCard(card) {
        removeElementsByClassname('task-card')
        taskHeader.textContent = "Select/Create a Project!"
        const title = card.target.parentElement.childNodes[0].innerText
        function index(card) {
            return card.title === title
        }
        console.log(title)
        projects.splice(projects.findIndex(index), 1)
        card.target.parentElement.remove()
        console.log(projects)
        i -= 1
    }

    function findProject(projectArray) {
        for (let i = 0; i < projectArray.length; i++) {
            // console.log(projects[i].title)
            if (projectArray[i].title === selectedProject) {
                console.log(`found: ${selectedProject} index: ${i}`)
                correctIndex = i
            }
        }
        return correctIndex, selectedProject
    }

export {
    Project,
    createProjectCard,
    removeCard,
    projects,
    renderProjects,
    findProject,
    selectedProject,
    correctIndex,
    defaultProject
};