import { correctIndex, defaultProject, projects } from "./projectDev" 

// Task Class 
    class Task {
        constructor(title, dueDate, priority) {
            this.title = title
            this.dueDate = dueDate
            this.priority = priority
        }
    }


const taskHeader = document.getElementById('task-header')
const taskContainer = document.getElementById('task-container')
const defaultTasks = [
    new Task('Default Task #1', '2420-06-06', 'High'),
    new Task('Default Task #2', '2420-06-06', 'Low'),
    new Task('Default Task #3', '2420-06-06', 'High')
]

defaultProject.projectTasks = defaultTasks

let i = 0;

//FUNCTIONS ----------------------------------------------------------------------

function createTaskCard(task) {    
        const taskCard = document.createElement('div')
        taskCard.className = 'task-card'
        
        const taskTitle = document.createElement('h3')
        taskTitle.className = 'task-title'
        taskTitle.innerHTML = task.title
        taskCard.appendChild(taskTitle);
        
        const taskDate = document.createElement('p')
        taskDate.className = 'task-date'
        taskDate.innerText = task.dueDate
        taskCard.appendChild(taskDate);

        const taskPriority = document.createElement('p')
        taskPriority.className = 'task-priority'
        taskPriority.innerText = task.priority
        taskCard.appendChild(taskPriority);

        const deleteButton = document.createElement('button')
        deleteButton.addEventListener('click', removeTaskCard)
        deleteButton.className = 'task-delete'
        deleteButton.innerText = 'x'
        taskCard.appendChild(deleteButton);

        const completeButton = document.createElement('button')
        completeButton.className = 'complete-button'
        completeButton.innerText = '✓'
        taskCard.appendChild(completeButton)
        completeButton.addEventListener('click', () => {
            taskCard.classList.toggle('completed')
        })
        
        taskContainer.appendChild(taskCard)
    }

    // Render
    function renderTasks(taskArray) {
        for (i; i < taskArray.length; i++) {
            createTaskCard(taskArray[i])
        }
    }

    function renderProjectTasks(taskArray) {
        removeElementsByClassname('task-card')
        for (let x = 0; x < taskArray.length; x++) {
            createTaskCard(taskArray[x])
        }
    }

    function removeElementsByClassname(classname) {
        const elements = document.getElementsByClassName(classname)
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0])
        }
    }

    function removeTaskCard(task) {
        const title = task.target.parentElement.childNodes[0].innerText
        function index(task) {
            return task.title === title
        }
        console.log(task)
        projects[correctIndex].projectTasks.splice(projects[correctIndex].projectTasks.findIndex(index), 1)
        task.target.parentElement.remove()
        // i -= 1
    }

  export {
    Task,
    defaultTasks,
    renderTasks,
    renderProjectTasks,
    removeElementsByClassname
    }