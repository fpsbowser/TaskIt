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



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
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
    _task_js__WEBPACK_IMPORTED_MODULE_1__.tasks.push(task);
    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_task_js__WEBPACK_IMPORTED_MODULE_1__.tasks)
    console.log(_task_js__WEBPACK_IMPORTED_MODULE_1__.tasks)
    taskForm.reset()
})

;(0,_projectDev_js__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(_projectDev_js__WEBPACK_IMPORTED_MODULE_3__.projects)
;(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_task_js__WEBPACK_IMPORTED_MODULE_1__.tasks)
















// project()
// task()
// priority()
// console.log(project.project)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNKdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUMvREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNnQjtBQUNkO0FBQzJCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFPO0FBQy9CLElBQUkseURBQWE7QUFDakIsSUFBSSwrREFBYyxDQUFDLG9EQUFRO0FBQzNCLGdCQUFnQixvREFBUTtBQUN4QjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EscUJBQXFCLDBDQUFJO0FBQ3pCLElBQUksZ0RBQVU7QUFDZCxJQUFJLHFEQUFXLENBQUMsMkNBQUs7QUFDckIsZ0JBQWdCLDJDQUFLO0FBQ3JCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0RBQWMsQ0FBQyxvREFBUTtBQUN2QixzREFBVyxDQUFDLDJDQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrbGlzdC8uL3NyYy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90YXNrbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Rhc2tsaXN0Ly4vc3JjL3Byb2plY3REZXYuanMiLCJ3ZWJwYWNrOi8vdGFza2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90YXNrbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFza2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2tsaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByaW9yaXR5ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1ByaW9yaXR5IG1vZHVsZSBsaW5rZWQnKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlvcml0eTsiLCJjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1Byb2plY3QgbW9kdWxlIGxpbmtlZCcpXHJcblxyXG5cclxuXHJcbiAgICAvLyBleHBvcnRcclxuICAgIGNsYXNzIFByb2plY3Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1tb2RhbCcpXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpXHJcbiAgICAvLyBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpXHJcblxyXG4gICAgICAgIC8vIERPTSBFbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1hZGRidG4nKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQnV0dG9uJylcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJylcclxuICAgIFxyXG4gICAgICAgIC8vIEJpbmQgRXZlbnRzXHJcbiAgICAgICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZFByb2plY3QgYnRuIGNsaWNrZWQgLSBvcGVuIHByb2plY3QgbW9kYWwnKVxyXG4gICAgICAgICAgICAvLyBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0T25lKVxyXG4gICAgICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgfSlcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmb3JtU3VibWl0dGVkKVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1TdWJtaXR0ZWQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChmb3JtLnRpdGxlLnZhbHVlLCBmb3JtLmRhdGUudmFsdWUsIGZvcm0ucHJpb3JpdHkudmFsdWUpXHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpXHJcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgbGV0IHByb2plY3RPbmUgPSBuZXcgUHJvamVjdCgnRmluaXNoIFByb2plY3QnLCAnMDYvMDYvMjInLCAnaGlnaCBwcmlvcml0eScpXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdENhcmQocHJvamVjdE9uZSlcclxuICAgIC8vIGV4cG9ydCBwcm9qZWN0IGNhcmQgZnVuY3Rpb25zXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWNhcmQnXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlXHJcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHByb2plY3REYXRlLmlubmVyVGV4dCA9IHByb2plY3QuZHVlRGF0ZVxyXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3REYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LmlubmVyVGV4dCA9IHByb2plY3QucHJpb3JpdHlcclxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUNhcmQpXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWRlbGV0ZWJ0bidcclxuICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ3gnXHJcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgYXBwZW5kQ2FyZChwcm9qZWN0Q2FyZClcclxuICAgIH1cclxuICAgIC8vIGV4cG9ydCBwcm9qZWN0IGNhcmRcclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNhcmQoY2FyZCkge1xyXG4gICAgICAgIGNhcmQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2FyZChjYXJkKSB7XHJcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHByb2plY3RzID0gW3Byb2plY3RPbmVdXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxuXHJcbn1cclxuXHJcblxyXG4vLyBjb25zdCBwcm9qZWN0ID0ge1xyXG4vLyAgICAgYWRkUHJvamVjdEJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYWRkYnRuJyksXHJcbi8vICAgICBwcm9qZWN0Q29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb250YWluZXInKSxcclxuLy8gICAgIGFwcGVuZENhcmQ6IGZ1bmN0aW9uKGNhcmQpIHtcclxuLy8gICAgICAgICB0aGlzLnByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcclxuLy8gICAgIH0sXHJcbi8vICAgICBjcmVhdGVQcm9qZWN0Q2FyZDogZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4vLyAgICAgICAgIHByb2plY3RDYXJkLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWNhcmQnXHJcbi8vICAgICAgICAgdGhpcy5hcHBlbmRDYXJkKHByb2plY3RDYXJkKVxyXG4vLyAgICAgfSxcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDsiLCIvLyBQcm9qZWN0IENsYXNzIFxyXG4gICAgY2xhc3MgUHJvamVjdCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBuZXdQcm9qZWN0QXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgICAgIHRoaXMubmV3UHJvamVjdEFycmF5ID0gW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpXHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcsICcyNDIwLTA2LTA2JywgJ0xvdycpXHJcbmNvbnN0IHByb2plY3RzID0gW2RlZmF1bHRQcm9qZWN0XVxyXG5cclxuXHJcbmxldCBpID0gMDtcclxuXHJcblxyXG4vL0ZVTkNUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc05hbWUgPSAncHJvamVjdC1jYXJkJ1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlXHJcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHByb2plY3REYXRlLmlubmVyVGV4dCA9IHByb2plY3QuZHVlRGF0ZVxyXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3REYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcHJvamVjdFByaW9yaXR5LmlubmVyVGV4dCA9IHByb2plY3QucHJpb3JpdHlcclxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUNhcmQpXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWRlbGV0ZWJ0bidcclxuICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ3gnXHJcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcclxuICAgICAgICBmb3IgKGk7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdENhcmQocHJvamVjdEFycmF5W2ldKVxyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gYXBwZW5kQ2FyZChjYXJkKSB7XHJcbiAgICAvLyAgICAgLy8gcHJvamVjdHMucHVzaChjYXJkKVxyXG4gICAgLy8gICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcclxuICAgIC8vIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVDYXJkKGNhcmQpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNhcmQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5pbm5lclRleHRcclxuICAgICAgICBmdW5jdGlvbiBpbmRleChjYXJkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXJkLnRpdGxlID09PSB0aXRsZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSlcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuZmluZEluZGV4KGluZGV4KSwgMSlcclxuICAgICAgICBjYXJkLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgICAgaSAtPSAxXHJcbiAgICB9XHJcblxyXG5leHBvcnQge1xyXG4gICAgUHJvamVjdCxcclxuICAgIGNyZWF0ZVByb2plY3RDYXJkLFxyXG4gICAgcmVtb3ZlQ2FyZCxcclxuICAgIHByb2plY3RzLFxyXG4gICAgcmVuZGVyUHJvamVjdHNcclxufTsiLCIvLyBUYXNrIENsYXNzIFxyXG4gICAgY2xhc3MgVGFzayB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJylcclxuY29uc3QgZGVmYXVsdFRhc2tzID0gW1xyXG4gICAgbmV3IFRhc2soJ0RlZmF1bHQgVGFzayAjMScsICcyNDIwLTA2LTA2JywgJ0hpZ2gnKSxcclxuICAgIG5ldyBUYXNrKCdEZWZhdWx0IFRhc2sgIzInLCAnMjQyMC0wNi0wNicsICdMb3cnKSxcclxuICAgIG5ldyBUYXNrKCdEZWZhdWx0IFRhc2sgIzMnLCAnMjQyMC0wNi0wNicsICdIaWdoJylcclxuXVxyXG5jb25zdCB0YXNrcyA9IFtkZWZhdWx0VGFza3NbMF0sZGVmYXVsdFRhc2tzWzFdLGRlZmF1bHRUYXNrc1syXV1cclxuXHJcbmxldCBpID0gMDtcclxuXHJcblxyXG5cclxuLy9GVU5DVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmQodGFzaykgeyAgICBcclxuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGFza0NhcmQuY2xhc3NOYW1lID0gJ3Rhc2stY2FyZCdcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICAgICAgICB0YXNrVGl0bGUuY2xhc3NOYW1lID0gJ3Rhc2stdGl0bGUnXHJcbiAgICAgICAgdGFza1RpdGxlLmlubmVySFRNTCA9IHRhc2sudGl0bGVcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdGFza0RhdGUuY2xhc3NOYW1lID0gJ3Rhc2stZGF0ZSdcclxuICAgICAgICB0YXNrRGF0ZS5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGVcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc05hbWUgPSAndGFzay1wcmlvcml0eSdcclxuICAgICAgICB0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFzay5wcmlvcml0eVxyXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgLy8gZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlQ2FyZClcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Rhc2stZGVsZXRlJ1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAneCdcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2NvbXBsZXRlLWJ1dHRvbidcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAn4pyTJ1xyXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbmRlclxyXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFza3ModGFza0FycmF5KSB7XHJcbiAgICAgICAgZm9yIChpOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tDYXJkKHRhc2tBcnJheVtpXSlcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQge1xyXG4gICAgVGFzayxcclxuICAgIHRhc2tzLFxyXG4gICAgcmVuZGVyVGFza3NcclxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXHJcbmltcG9ydCB7VGFzaywgdGFza3MsIHJlbmRlclRhc2tzfSBmcm9tICcuL3Rhc2suanMnXHJcbmltcG9ydCBwcmlvcml0eSBmcm9tICcuL3ByaW9yaXR5LmpzJ1xyXG5pbXBvcnQge1Byb2plY3QscHJvamVjdHMscmVuZGVyUHJvamVjdHN9IGZyb20gJy4vcHJvamVjdERldi5qcydcclxuXHJcbiAvLyBET00gRWxlbWVudHNcclxuIC8vIFByb2plY3RzXHJcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW1vZGFsJylcclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJylcclxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWFkZGJ0bicpXHJcblxyXG4vLyBUYXNrc1xyXG5jb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1tb2RhbCcpXHJcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpXHJcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkdGFzay1idG4nKVxyXG5cclxuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdXR0b24nKVxyXG4gXHJcbiAvLyBCaW5kIEV2ZW50c1xyXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xyXG59KVxyXG5cclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRhc2tNb2RhbC5zaG93TW9kYWwoKVxyXG59KVxyXG5cclxuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcclxufSlcclxuXHJcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Rm9ybS50aXRsZS52YWx1ZSwgcHJvamVjdEZvcm0uZGF0ZS52YWx1ZSwgcHJvamVjdEZvcm0ucHJpb3JpdHkudmFsdWUpXHJcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cylcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKVxyXG59KVxyXG5cclxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tGb3JtLnRpdGxlLnZhbHVlLCB0YXNrRm9ybS5kYXRlLnZhbHVlLCB0YXNrRm9ybS5wcmlvcml0eS52YWx1ZSlcclxuICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICByZW5kZXJUYXNrcyh0YXNrcylcclxuICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgdGFza0Zvcm0ucmVzZXQoKVxyXG59KVxyXG5cclxucmVuZGVyUHJvamVjdHMocHJvamVjdHMpXHJcbnJlbmRlclRhc2tzKHRhc2tzKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gcHJvamVjdCgpXHJcbi8vIHRhc2soKVxyXG4vLyBwcmlvcml0eSgpXHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3QucHJvamVjdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=