const project = () => {
    console.log('Project module linked')



    // export
    class Project {
        constructor(title, dueDate, priority) {
            this.title = title
            this.dueDate = dueDate
            this.priority = priority
        }
    }

    const modal = document.getElementById('project-modal')
    const form = document.getElementById('project-form')
    // const formSubmit = document.getElementById('submit')

        // DOM Elements
        const addProject = document.getElementById('project-addbtn')
        const closeButton = document.getElementById('closeButton')
        const projectContainer = document.getElementById('project-container')
    
        // Bind Events
        addProject.addEventListener('click', () => {
            console.log('addProject btn clicked - open project modal')
            // createProjectCard(projectOne)
            modal.showModal();
        })
        closeButton.addEventListener('click', () => {
            modal.close()
        })
    

    
    form.addEventListener('submit', formSubmitted)

    function formSubmitted() {
            const project = new Project(form.title.value, form.date.value, form.priority.value)
            createProjectCard(project)
            projects.push(project)
            console.log(projects)
            form.reset()
        }


    let projectOne = new Project('Finish Project', '06/06/22', 'high priority')
        createProjectCard(projectOne)
    // export project card functions
    function createProjectCard(project) {
        
        const projectCard = document.createElement('div')
        projectCard.className = 'project-card'
        
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

        appendCard(projectCard)
    }
    // export project card
    

    function removeCard(card) {
        card.target.parentElement.remove()
    }


    function appendCard(card) {
        card.addEventListener('click', () => {
            console.log('test')
        })
        projectContainer.appendChild(card)
    }

    

    const projects = [projectOne]
    console.log(projects)

}


// const project = {
//     addProjectButton: document.getElementById('project-addbtn'),
//     projectContainer: document.getElementById('project-container'),
//     appendCard: function(card) {
//         this.projectContainer.appendChild(card)
//     },
//     createProjectCard: function() {
//         const projectCard = document.createElement('div')
//         projectCard.className = 'project-card'
//         this.appendCard(projectCard)
//     },
// }

export default project;