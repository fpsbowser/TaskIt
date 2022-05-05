// Project Class 
    class Project {
        constructor(title, dueDate, priority, newProjectArray) {
            this.title = title
            this.dueDate = dueDate
            this.priority = priority
            this.newProjectArray = []
        }
    }


const projectContainer = document.getElementById('project-container')
const defaultProject = new Project('Default Project', '2420-06-06', 'Low')
const projects = [defaultProject]


let i = 0;


//FUNCTIONS ----------------------------------------------------------------------

function createProjectCard(project) {    
        const projectCard = document.createElement('div')
        projectCard.className = 'project-card'
        projectContainer.appendChild(projectCard)
        
        const projectTitle = document.createElement('h3')
        projectTitle.innerHTML = project.title
        projectCard.appendChild(projectTitle);
        
        const projectDate = document.createElement('p')
        projectDate.innerText = project.dueDate
        projectCard.appendChild(projectDate);

        const projectPriority = document.createElement('p')
        projectPriority.innerText = project.priority
        projectCard.appendChild(projectPriority);

        const deleteButton = document.createElement('button')
        deleteButton.addEventListener('click', removeCard)
        deleteButton.className = 'project-deletebtn'
        deleteButton.innerText = 'x'
        projectCard.appendChild(deleteButton);
    }

    function renderProjects(projectArray) {
        for (i; i < projectArray.length; i++) {
            createProjectCard(projectArray[i])
        }
  }

    // function appendCard(card) {
    //     // projects.push(card)
    //     projectContainer.appendChild(card)
    // }

    function removeCard(card) {
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

export {
    Project,
    createProjectCard,
    removeCard,
    projects,
    renderProjects
};