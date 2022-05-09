import {Task, renderTasks, renderProjectTasks, defaultTasks} from './task.js'
import {Project,projects,renderProjects,selectedProject} from './projectDev.js'

// Global
let correctIndex = 0;

 // DOM Elements
 // Projects
const projectModal = document.getElementById('project-modal')
const projectForm = document.getElementById('project-form')
const addProject = document.getElementById('project-addbtn')

// Tasks
const taskModal = document.getElementById('task-modal')
const taskForm = document.getElementById('task-form')
const addTask = document.getElementById('addtask-btn')

const closeButton = document.getElementById('closeButton')
 
 // Bind Events
addProject.addEventListener('click', () => {
    projectModal.showModal();
})

addTask.addEventListener('click', () => {
    taskModal.showModal()
    console.log(projects)
})

closeButton.addEventListener('click', () => {
     projectModal.close()
})

projectForm.addEventListener('submit', () => {
    const project = new Project(projectForm.title.value, projectForm.date.value, projectForm.priority.value)
    projects.push(project)
    renderProjects(projects)
    console.log(projects)
    projectForm.reset()
})

taskForm.addEventListener('submit', () => {
    const task = new Task(taskForm.title.value, taskForm.date.value, taskForm.priority.value)
    //find current project
    findProject(projects)
    console.log(correctIndex)
    projects[correctIndex].projectTasks.push(task)
    renderProjectTasks(projects[correctIndex].projectTasks)
    taskForm.reset()
})

function findProject(projectArray) {
    for (let i = 0; i < projectArray.length; i++) {
        if (projectArray[i].title === selectedProject) {
            console.log(`found: ${selectedProject} index: ${i}`)
            correctIndex = i
        }
    }
    return correctIndex, selectedProject
}

renderProjects(projects)
renderTasks(defaultTasks)
















// project()
// task()
// priority()
// console.log(project.project)