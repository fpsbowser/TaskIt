// Task Class 
    class Task {
        constructor(title, dueDate, priority) {
            this.title = title
            this.dueDate = dueDate
            this.priority = priority
        }
    }


const taskContainer = document.getElementById('task-container')
const defaultTasks = [
    new Task('Default Task #1', '2420-06-06', 'High'),
    new Task('Default Task #2', '2420-06-06', 'Low'),
    new Task('Default Task #3', '2420-06-06', 'High')
]
const tasks = [defaultTasks[0],defaultTasks[1],defaultTasks[2]]

let i = 0;



//FUNCTIONS ----------------------------------------------------------------------

function createTaskCard(task) {    
        const taskCard = document.createElement('div')
        taskCard.className = 'task-card'
        taskContainer.appendChild(taskCard)
        
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
        // deleteButton.addEventListener('click', removeCard)
        deleteButton.className = 'task-delete'
        deleteButton.innerText = 'x'
        taskCard.appendChild(deleteButton);

        const completeButton = document.createElement('button')
        completeButton.className = 'complete-button'
        completeButton.innerText = '✓'
        taskCard.appendChild(completeButton)
    }

    // Render
    function renderTasks(taskArray) {
        for (i; i < taskArray.length; i++) {
            createTaskCard(taskArray[i])
        }
  }

  export {
    Task,
    tasks,
    renderTasks
  }