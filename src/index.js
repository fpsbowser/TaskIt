import project from './project.js'
import {Task, tasks, renderTasks} from './task.js'
import priority from './priority.js'
import {Project,projects,renderProjects} from './projectDev.js'

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
    tasks.push(task);
    renderTasks(tasks)
    console.log(tasks)
    taskForm.reset()
})

renderProjects(projects)
renderTasks(tasks)
















// project()
// task()
// priority()
// console.log(project.project)