/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/priority.js":
/*!*************************!*\
  !*** ./src/priority.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const priority = () => {
    console.log('Priority module linked')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priority);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);

/***/ }),

/***/ "./src/projectDev.js":
/*!***************************!*\
  !*** ./src/projectDev.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeCard": () => (/* binding */ removeCard),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


// Project Class 
    class Project {
        constructor(title, dueDate, priority, projectTasks) {
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


let i = 0;


//FUNCTIONS ----------------------------------------------------------------------

function createProjectCard(project) {    
        const projectCard = document.createElement('div')
        projectCard.className = 'project-card'
        projectContainer.appendChild(projectCard)
        projectCard.addEventListener('click', (e) => {
            
            // console.log(e.target.parentElement.firstChild.innerText)
            // taskHeader.textContent = `${e.target.parentElement.firstChild.innerText} Tasks`
            console.log(project.projectTasks)
            console.log(e.target.parentElement)
            // renderTasks(project.projectTasks)
            // selectedProject = e.target.parentElement.firstChild.innerText
            // console.log(selectedProject)
        })
        
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



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "defaultTasks": () => (/* binding */ defaultTasks),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _projectDev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDev */ "./src/projectDev.js");
 
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
const tasks = []

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
        // deleteButton.addEventListener('click', removeCard)
        deleteButton.className = 'task-delete'
        deleteButton.innerText = 'x'
        taskCard.appendChild(deleteButton);

        const completeButton = document.createElement('button')
        completeButton.className = 'complete-button'
        completeButton.innerText = '✓'
        taskCard.appendChild(completeButton)
        
        
        taskContainer.appendChild(taskCard)
        // push task card object into correct projectcard array
        
        _projectDev__WEBPACK_IMPORTED_MODULE_0__.projects[0].projectTasks.push(taskCard)

        // console.log(projects[0].projectTasks)
        // console.log(projects.title)

        // search(projects, 'test')





    }

    // Render
    function renderTasks(taskArray) {
        for (i; i < taskArray.length; i++) {
            createTaskCard(taskArray[i])
        }
    }

    function search(array, term) {
        for (let x = 0; x < array.length; x++) {
            if (array[x].title == term) {
                console.log('yes')
            }
        }
    }

  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priority.js */ "./src/priority.js");
/* harmony import */ var _projectDev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectDev.js */ "./src/projectDev.js");




// import project from './project.js'

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
    const project = new _projectDev_js__WEBPACK_IMPORTED_MODULE_3__.Project(projectForm.title.value, projectForm.date.value, projectForm.priority.value)
    _projectDev_js__WEBPACK_IMPORTED_MODULE_3__.projects.push(project)
    ;(0,_projectDev_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(_projectDev_js__WEBPACK_IMPORTED_MODULE_3__.projects)
    console.log(_projectDev_js__WEBPACK_IMPORTED_MODULE_3__.projects)
    projectForm.reset()
})

taskForm.addEventListener('submit', () => {
    const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task(taskForm.title.value, taskForm.date.value, taskForm.priority.value)
    //find current project
    _task_js__WEBPACK_IMPORTED_MODULE_1__.tasks.push(task)
    ;(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_task_js__WEBPACK_IMPORTED_MODULE_1__.tasks)
    // console.log(tasks)
    taskForm.reset()
})

;(0,_projectDev_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(_projectDev_js__WEBPACK_IMPORTED_MODULE_3__.projects)
// renderTasks(tasks)
















// project()
// task()
// priority()
// console.log(project.project)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNnQjtBQUNkO0FBQzJCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx3QkFBd0IsbURBQU87QUFDL0IsSUFBSSx5REFBYTtBQUNqQixJQUFJLCtEQUFjLENBQUMsb0RBQVE7QUFDM0IsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxxQkFBcUIsMENBQUk7QUFDekI7QUFDQSxJQUFJLGdEQUFVO0FBQ2QsSUFBSSxzREFBVyxDQUFDLDJDQUFLO0FBQ3JCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwrREFBYyxDQUFDLG9EQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2tsaXN0Ly4vc3JjL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3Rhc2tsaXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGFza2xpc3QvLi9zcmMvcHJvamVjdERldi5qcyIsIndlYnBhY2s6Ly90YXNrbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFza2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJpb3JpdHkgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUHJpb3JpdHkgbW9kdWxlIGxpbmtlZCcpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaW9yaXR5OyIsImNvbnN0IHByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUHJvamVjdCBtb2R1bGUgbGlua2VkJylcclxuXHJcblxyXG5cclxuICAgIC8vIGV4cG9ydFxyXG4gICAgY2xhc3MgUHJvamVjdCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW1vZGFsJylcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJylcclxuICAgIC8vIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JylcclxuXHJcbiAgICAgICAgLy8gRE9NIEVsZW1lbnRzXHJcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWFkZGJ0bicpXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdXR0b24nKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb250YWluZXInKVxyXG4gICAgXHJcbiAgICAgICAgLy8gQmluZCBFdmVudHNcclxuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkUHJvamVjdCBidG4gY2xpY2tlZCAtIG9wZW4gcHJvamVjdCBtb2RhbCcpXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3RPbmUpXHJcbiAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKClcclxuICAgICAgICB9KVxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1TdWJtaXR0ZWQpXHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybVN1Ym1pdHRlZCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGZvcm0udGl0bGUudmFsdWUsIGZvcm0uZGF0ZS52YWx1ZSwgZm9ybS5wcmlvcml0eS52YWx1ZSlcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdENhcmQocHJvamVjdClcclxuICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxuICAgICAgICAgICAgZm9ybS5yZXNldCgpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdE9uZSA9IG5ldyBQcm9qZWN0KCdGaW5pc2ggUHJvamVjdCcsICcwNi8wNi8yMicsICdoaWdoIHByaW9yaXR5JylcclxuICAgICAgICBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0T25lKVxyXG4gICAgLy8gZXhwb3J0IHByb2plY3QgY2FyZCBmdW5jdGlvbnNcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gJ3Byb2plY3QtY2FyZCdcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVySFRNTCA9IHByb2plY3QudGl0bGVcclxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcHJvamVjdERhdGUuaW5uZXJUZXh0ID0gcHJvamVjdC5kdWVEYXRlXHJcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdERhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBwcm9qZWN0UHJpb3JpdHkuaW5uZXJUZXh0ID0gcHJvamVjdC5wcmlvcml0eVxyXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlQ2FyZClcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Byb2plY3QtZGVsZXRlYnRuJ1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAneCdcclxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBhcHBlbmRDYXJkKHByb2plY3RDYXJkKVxyXG4gICAgfVxyXG4gICAgLy8gZXhwb3J0IHByb2plY3QgY2FyZFxyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2FyZChjYXJkKSB7XHJcbiAgICAgICAgY2FyZC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhcHBlbmRDYXJkKGNhcmQpIHtcclxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgcHJvamVjdHMgPSBbcHJvamVjdE9uZV1cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG5cclxufVxyXG5cclxuXHJcbi8vIGNvbnN0IHByb2plY3QgPSB7XHJcbi8vICAgICBhZGRQcm9qZWN0QnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1hZGRidG4nKSxcclxuLy8gICAgIHByb2plY3RDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpLFxyXG4vLyAgICAgYXBwZW5kQ2FyZDogZnVuY3Rpb24oY2FyZCkge1xyXG4vLyAgICAgICAgIHRoaXMucHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxyXG4vLyAgICAgfSxcclxuLy8gICAgIGNyZWF0ZVByb2plY3RDYXJkOiBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbi8vICAgICAgICAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gJ3Byb2plY3QtY2FyZCdcclxuLy8gICAgICAgICB0aGlzLmFwcGVuZENhcmQocHJvamVjdENhcmQpXHJcbi8vICAgICB9LFxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0OyIsImltcG9ydCB7IHJlbmRlclRhc2tzLCB0YXNrcyB9IGZyb20gXCIuL3Rhc2tcIlxyXG5cclxuLy8gUHJvamVjdCBDbGFzcyBcclxuICAgIGNsYXNzIFByb2plY3Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdFRhc2tzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RUYXNrcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb250YWluZXInKVxyXG5jb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staGVhZGVyJylcclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0JywgJzI0MjAtMDYtMDYnLCAnTG93JylcclxuY29uc3QgcHJvamVjdHMgPSBbZGVmYXVsdFByb2plY3RdXHJcbmxldCBzZWxlY3RlZFByb2plY3QgPSAnJ1xyXG5cclxuXHJcbmxldCBpID0gMDtcclxuXHJcblxyXG4vL0ZVTkNUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc05hbWUgPSAncHJvamVjdC1jYXJkJ1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXHJcbiAgICAgICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmlubmVyVGV4dClcclxuICAgICAgICAgICAgLy8gdGFza0hlYWRlci50ZXh0Q29udGVudCA9IGAke2UudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lclRleHR9IFRhc2tzYFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnByb2plY3RUYXNrcylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudClcclxuICAgICAgICAgICAgLy8gcmVuZGVyVGFza3MocHJvamVjdC5wcm9qZWN0VGFza3MpXHJcbiAgICAgICAgICAgIC8vIHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lclRleHRcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlXHJcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHByb2plY3REYXRlLmlubmVyVGV4dCA9IHByb2plY3QuZHVlRGF0ZVxyXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3REYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LmlubmVyVGV4dCA9IHByb2plY3QucHJpb3JpdHlcclxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUNhcmQpXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWRlbGV0ZWJ0bidcclxuICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ3gnXHJcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcclxuICAgICAgICBmb3IgKGk7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdENhcmQocHJvamVjdEFycmF5W2ldKVxyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2FyZChjYXJkKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBjYXJkLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0XHJcbiAgICAgICAgZnVuY3Rpb24gaW5kZXgoY2FyZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FyZC50aXRsZSA9PT0gdGl0bGVcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGl0bGUpXHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmZpbmRJbmRleChpbmRleCksIDEpXHJcbiAgICAgICAgY2FyZC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICAgIGkgLT0gMVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IHtcclxuICAgIFByb2plY3QsXHJcbiAgICBjcmVhdGVQcm9qZWN0Q2FyZCxcclxuICAgIHJlbW92ZUNhcmQsXHJcbiAgICBwcm9qZWN0cyxcclxuICAgIHJlbmRlclByb2plY3RzXHJcbn07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0RGV2XCIgXHJcbi8vIFRhc2sgQ2xhc3MgXHJcbiAgICBjbGFzcyBUYXNrIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbmNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1oZWFkZXInKVxyXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJylcclxuY29uc3QgZGVmYXVsdFRhc2tzID0gW1xyXG4gICAgbmV3IFRhc2soJ0RlZmF1bHQgVGFzayAjMScsICcyNDIwLTA2LTA2JywgJ0hpZ2gnKSxcclxuICAgIG5ldyBUYXNrKCdEZWZhdWx0IFRhc2sgIzInLCAnMjQyMC0wNi0wNicsICdMb3cnKSxcclxuICAgIG5ldyBUYXNrKCdEZWZhdWx0IFRhc2sgIzMnLCAnMjQyMC0wNi0wNicsICdIaWdoJylcclxuXVxyXG5jb25zdCB0YXNrcyA9IFtdXHJcblxyXG5sZXQgaSA9IDA7XHJcblxyXG4vL0ZVTkNUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZCh0YXNrKSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0YXNrQ2FyZC5jbGFzc05hbWUgPSAndGFzay1jYXJkJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICAgICAgICB0YXNrVGl0bGUuY2xhc3NOYW1lID0gJ3Rhc2stdGl0bGUnXHJcbiAgICAgICAgdGFza1RpdGxlLmlubmVySFRNTCA9IHRhc2sudGl0bGVcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdGFza0RhdGUuY2xhc3NOYW1lID0gJ3Rhc2stZGF0ZSdcclxuICAgICAgICB0YXNrRGF0ZS5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGVcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc05hbWUgPSAndGFzay1wcmlvcml0eSdcclxuICAgICAgICB0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFzay5wcmlvcml0eVxyXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgLy8gZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlQ2FyZClcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Rhc2stZGVsZXRlJ1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAneCdcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2NvbXBsZXRlLWJ1dHRvbidcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAn4pyTJ1xyXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpXHJcbiAgICAgICAgLy8gcHVzaCB0YXNrIGNhcmQgb2JqZWN0IGludG8gY29ycmVjdCBwcm9qZWN0Y2FyZCBhcnJheVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2plY3RzWzBdLnByb2plY3RUYXNrcy5wdXNoKHRhc2tDYXJkKVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1swXS5wcm9qZWN0VGFza3MpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHMudGl0bGUpXHJcblxyXG4gICAgICAgIC8vIHNlYXJjaChwcm9qZWN0cywgJ3Rlc3QnKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVuZGVyXHJcbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrQXJyYXkpIHtcclxuICAgICAgICBmb3IgKGk7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3JlYXRlVGFza0NhcmQodGFza0FycmF5W2ldKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWFyY2goYXJyYXksIHRlcm0pIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGFycmF5Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJheVt4XS50aXRsZSA9PSB0ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygneWVzJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgZXhwb3J0IHtcclxuICAgIFRhc2ssXHJcbiAgICB0YXNrcyxcclxuICAgIGRlZmF1bHRUYXNrcyxcclxuICAgIHJlbmRlclRhc2tzXHJcbiAgICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXHJcbmltcG9ydCB7VGFzaywgdGFza3MsIHJlbmRlclRhc2tzfSBmcm9tICcuL3Rhc2suanMnXHJcbmltcG9ydCBwcmlvcml0eSBmcm9tICcuL3ByaW9yaXR5LmpzJ1xyXG5pbXBvcnQge1Byb2plY3QscHJvamVjdHMscmVuZGVyUHJvamVjdHN9IGZyb20gJy4vcHJvamVjdERldi5qcydcclxuLy8gaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xyXG5cclxuIC8vIERPTSBFbGVtZW50c1xyXG4gLy8gUHJvamVjdHNcclxuY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbW9kYWwnKVxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKVxyXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYWRkYnRuJylcclxuXHJcbi8vIFRhc2tzXHJcbmNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW1vZGFsJylcclxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJylcclxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGR0YXNrLWJ0bicpXHJcblxyXG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ1dHRvbicpXHJcbiBcclxuIC8vIEJpbmQgRXZlbnRzXHJcbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XHJcbn0pXHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdGFza01vZGFsLnNob3dNb2RhbCgpXHJcbn0pXHJcblxyXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKVxyXG59KVxyXG5cclxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RGb3JtLnRpdGxlLnZhbHVlLCBwcm9qZWN0Rm9ybS5kYXRlLnZhbHVlLCBwcm9qZWN0Rm9ybS5wcmlvcml0eS52YWx1ZSlcclxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpXHJcbn0pXHJcblxyXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0Zvcm0udGl0bGUudmFsdWUsIHRhc2tGb3JtLmRhdGUudmFsdWUsIHRhc2tGb3JtLnByaW9yaXR5LnZhbHVlKVxyXG4gICAgLy9maW5kIGN1cnJlbnQgcHJvamVjdFxyXG4gICAgdGFza3MucHVzaCh0YXNrKVxyXG4gICAgcmVuZGVyVGFza3ModGFza3MpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgIHRhc2tGb3JtLnJlc2V0KClcclxufSlcclxuXHJcbnJlbmRlclByb2plY3RzKHByb2plY3RzKVxyXG4vLyByZW5kZXJUYXNrcyh0YXNrcylcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHByb2plY3QoKVxyXG4vLyB0YXNrKClcclxuLy8gcHJpb3JpdHkoKVxyXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0LnByb2plY3QpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9