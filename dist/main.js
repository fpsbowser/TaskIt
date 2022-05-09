/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projectDev.js":
/*!***************************!*\
  !*** ./src/projectDev.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "correctIndex": () => (/* binding */ correctIndex),
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard),
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "findProject": () => (/* binding */ findProject),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeCard": () => (/* binding */ removeCard),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "selectedProject": () => (/* binding */ selectedProject)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


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
                console.log('uhoh')
                return
            } else {
            taskHeader.textContent = `Tasks for ${e.target.parentElement.firstChild.innerText}`
            selectedProject = e.target.parentElement.firstChild.innerText
            findProject(projects)
            console.log(correctIndex)
            ;(0,_task__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(projects[correctIndex].projectTasks)
            }  
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
        (0,_task__WEBPACK_IMPORTED_MODULE_0__.removeElementsByClassname)('task-card')
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
/* harmony export */   "removeElementsByClassname": () => (/* binding */ removeElementsByClassname),
/* harmony export */   "renderProjectTasks": () => (/* binding */ renderProjectTasks),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks)
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

_projectDev__WEBPACK_IMPORTED_MODULE_0__.defaultProject.projectTasks = defaultTasks

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
        _projectDev__WEBPACK_IMPORTED_MODULE_0__.projects[_projectDev__WEBPACK_IMPORTED_MODULE_0__.correctIndex].projectTasks.splice(_projectDev__WEBPACK_IMPORTED_MODULE_0__.projects[_projectDev__WEBPACK_IMPORTED_MODULE_0__.correctIndex].projectTasks.findIndex(index), 1)
        task.target.parentElement.remove()
        // i -= 1
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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _projectDev_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDev.js */ "./src/projectDev.js");



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
    console.log(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects)
})

closeButton.addEventListener('click', () => {
     projectModal.close()
})

projectForm.addEventListener('submit', () => {
    const project = new _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectForm.title.value, projectForm.date.value, projectForm.priority.value)
    _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(project)
    ;(0,_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects)
    console.log(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects)
    projectForm.reset()
})

taskForm.addEventListener('submit', () => {
    const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(taskForm.title.value, taskForm.date.value, taskForm.priority.value)
    //find current project
    findProject(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects)
    console.log(correctIndex)
    _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects[correctIndex].projectTasks.push(task)
    ;(0,_task_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects[correctIndex].projectTasks)
    taskForm.reset()
})

function findProject(projectArray) {
    for (let i = 0; i < projectArray.length; i++) {
        if (projectArray[i].title === _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject) {
            console.log(`found: ${_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject} index: ${i}`)
            correctIndex = i
        }
    }
    return correctIndex, _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject
}

(0,_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects)
;(0,_task_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_task_js__WEBPACK_IMPORTED_MODULE_0__.defaultTasks)
















// project()
// task()
// priority()
// console.log(project.project)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxnQkFBZ0Isb0RBQVE7QUFDeEI7QUFDQSxJQUFJLG9EQUFRO0FBQ1osSUFBSSw2REFBa0IsQ0FBQyxvREFBUTtBQUMvQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QyxzQ0FBc0MsMkRBQWU7QUFDckQsa0NBQWtDLDJEQUFlLEVBQUUsU0FBUyxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyREFBZTtBQUN4QztBQUNBO0FBQ0EsOERBQWMsQ0FBQyxvREFBUTtBQUN2QixzREFBVyxDQUFDLGtEQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrbGlzdC8uL3NyYy9wcm9qZWN0RGV2LmpzIiwid2VicGFjazovL3Rhc2tsaXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdGFza2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFza2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW1vdmVFbGVtZW50c0J5Q2xhc3NuYW1lLCByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi90YXNrXCJcclxuXHJcbi8vIFByb2plY3QgQ2xhc3MgXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMucHJvamVjdFRhc2tzID0gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb250YWluZXInKVxyXG5jb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staGVhZGVyJylcclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0JywgJzI0MjAtMDYtMDYnLCAnTG93JylcclxuY29uc3QgcHJvamVjdHMgPSBbZGVmYXVsdFByb2plY3RdXHJcbmxldCBzZWxlY3RlZFByb2plY3QgPSAnJ1xyXG5sZXQgY29ycmVjdEluZGV4ID0gMFxyXG5cclxubGV0IGkgPSAwO1xyXG5cclxuLy9GVU5DVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkgeyAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gJ3Byb2plY3QtY2FyZCdcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKVxyXG4gICAgICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IGRlbGV0ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Vob2gnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tIZWFkZXIudGV4dENvbnRlbnQgPSBgVGFza3MgZm9yICR7ZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmlubmVyVGV4dH1gXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lclRleHRcclxuICAgICAgICAgICAgZmluZFByb2plY3QocHJvamVjdHMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvcnJlY3RJbmRleClcclxuICAgICAgICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RzW2NvcnJlY3RJbmRleF0ucHJvamVjdFRhc2tzKVxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC50aXRsZVxyXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBwcm9qZWN0RGF0ZS5pbm5lclRleHQgPSBwcm9qZWN0LmR1ZURhdGVcclxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0RGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHByb2plY3RQcmlvcml0eS5pbm5lclRleHQgPSBwcm9qZWN0LnByaW9yaXR5XHJcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVDYXJkKVxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAncHJvamVjdC1kZWxldGVidG4nXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICd4J1xyXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdEFycmF5KSB7XHJcbiAgICAgICAgZm9yIChpOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3RBcnJheVtpXSlcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNhcmQoY2FyZCkge1xyXG4gICAgICAgIHJlbW92ZUVsZW1lbnRzQnlDbGFzc25hbWUoJ3Rhc2stY2FyZCcpXHJcbiAgICAgICAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9IFwiU2VsZWN0L0NyZWF0ZSBhIFByb2plY3QhXCJcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNhcmQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5pbm5lclRleHRcclxuICAgICAgICBmdW5jdGlvbiBpbmRleChjYXJkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXJkLnRpdGxlID09PSB0aXRsZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSlcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuZmluZEluZGV4KGluZGV4KSwgMSlcclxuICAgICAgICBjYXJkLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgICAgaSAtPSAxXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZFByb2plY3QocHJvamVjdEFycmF5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbaV0udGl0bGUpXHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0QXJyYXlbaV0udGl0bGUgPT09IHNlbGVjdGVkUHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGZvdW5kOiAke3NlbGVjdGVkUHJvamVjdH0gaW5kZXg6ICR7aX1gKVxyXG4gICAgICAgICAgICAgICAgY29ycmVjdEluZGV4ID0gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3JyZWN0SW5kZXgsIHNlbGVjdGVkUHJvamVjdFxyXG4gICAgfVxyXG5cclxuZXhwb3J0IHtcclxuICAgIFByb2plY3QsXHJcbiAgICBjcmVhdGVQcm9qZWN0Q2FyZCxcclxuICAgIHJlbW92ZUNhcmQsXHJcbiAgICBwcm9qZWN0cyxcclxuICAgIHJlbmRlclByb2plY3RzLFxyXG4gICAgZmluZFByb2plY3QsXHJcbiAgICBzZWxlY3RlZFByb2plY3QsXHJcbiAgICBjb3JyZWN0SW5kZXgsXHJcbiAgICBkZWZhdWx0UHJvamVjdFxyXG59OyIsImltcG9ydCB7IGNvcnJlY3RJbmRleCwgZGVmYXVsdFByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdERldlwiIFxyXG5cclxuLy8gVGFzayBDbGFzcyBcclxuICAgIGNsYXNzIFRhc2sge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWhlYWRlcicpXHJcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKVxyXG5jb25zdCBkZWZhdWx0VGFza3MgPSBbXHJcbiAgICBuZXcgVGFzaygnRGVmYXVsdCBUYXNrICMxJywgJzI0MjAtMDYtMDYnLCAnSGlnaCcpLFxyXG4gICAgbmV3IFRhc2soJ0RlZmF1bHQgVGFzayAjMicsICcyNDIwLTA2LTA2JywgJ0xvdycpLFxyXG4gICAgbmV3IFRhc2soJ0RlZmF1bHQgVGFzayAjMycsICcyNDIwLTA2LTA2JywgJ0hpZ2gnKVxyXG5dXHJcblxyXG5kZWZhdWx0UHJvamVjdC5wcm9qZWN0VGFza3MgPSBkZWZhdWx0VGFza3NcclxuXHJcbmxldCBpID0gMDtcclxuXHJcbi8vRlVOQ1RJT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKHRhc2spIHsgICAgXHJcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRhc2tDYXJkLmNsYXNzTmFtZSA9ICd0YXNrLWNhcmQnXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc05hbWUgPSAndGFzay10aXRsZSdcclxuICAgICAgICB0YXNrVGl0bGUuaW5uZXJIVE1MID0gdGFzay50aXRsZVxyXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0YXNrRGF0ZS5jbGFzc05hbWUgPSAndGFzay1kYXRlJ1xyXG4gICAgICAgIHRhc2tEYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZVxyXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTmFtZSA9ICd0YXNrLXByaW9yaXR5J1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS5pbm5lclRleHQgPSB0YXNrLnByaW9yaXR5XHJcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVUYXNrQ2FyZClcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Rhc2stZGVsZXRlJ1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAneCdcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2NvbXBsZXRlLWJ1dHRvbidcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAn4pyTJ1xyXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKVxyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZClcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW5kZXJcclxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tzKHRhc2tBcnJheSkge1xyXG4gICAgICAgIGZvciAoaTsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjcmVhdGVUYXNrQ2FyZCh0YXNrQXJyYXlbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrcyh0YXNrQXJyYXkpIHtcclxuICAgICAgICByZW1vdmVFbGVtZW50c0J5Q2xhc3NuYW1lKCd0YXNrLWNhcmQnKVxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGFza0FycmF5Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tDYXJkKHRhc2tBcnJheVt4XSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHNCeUNsYXNzbmFtZShjbGFzc25hbWUpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NuYW1lKVxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tDYXJkKHRhc2spIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRhc2sudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5pbm5lclRleHRcclxuICAgICAgICBmdW5jdGlvbiBpbmRleCh0YXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrLnRpdGxlID09PSB0aXRsZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxyXG4gICAgICAgIHByb2plY3RzW2NvcnJlY3RJbmRleF0ucHJvamVjdFRhc2tzLnNwbGljZShwcm9qZWN0c1tjb3JyZWN0SW5kZXhdLnByb2plY3RUYXNrcy5maW5kSW5kZXgoaW5kZXgpLCAxKVxyXG4gICAgICAgIHRhc2sudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgICAgICAvLyBpIC09IDFcclxuICAgIH1cclxuXHJcbiAgZXhwb3J0IHtcclxuICAgIFRhc2ssXHJcbiAgICBkZWZhdWx0VGFza3MsXHJcbiAgICByZW5kZXJUYXNrcyxcclxuICAgIHJlbmRlclByb2plY3RUYXNrcyxcclxuICAgIHJlbW92ZUVsZW1lbnRzQnlDbGFzc25hbWVcclxuICAgIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7VGFzaywgcmVuZGVyVGFza3MsIHJlbmRlclByb2plY3RUYXNrcywgZGVmYXVsdFRhc2tzfSBmcm9tICcuL3Rhc2suanMnXHJcbmltcG9ydCB7UHJvamVjdCxwcm9qZWN0cyxyZW5kZXJQcm9qZWN0cyxzZWxlY3RlZFByb2plY3R9IGZyb20gJy4vcHJvamVjdERldi5qcydcclxuXHJcbi8vIEdsb2JhbFxyXG5sZXQgY29ycmVjdEluZGV4ID0gMDtcclxuXHJcbiAvLyBET00gRWxlbWVudHNcclxuIC8vIFByb2plY3RzXHJcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW1vZGFsJylcclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJylcclxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWFkZGJ0bicpXHJcblxyXG4vLyBUYXNrc1xyXG5jb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1tb2RhbCcpXHJcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpXHJcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkdGFzay1idG4nKVxyXG5cclxuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdXR0b24nKVxyXG4gXHJcbiAvLyBCaW5kIEV2ZW50c1xyXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xyXG59KVxyXG5cclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRhc2tNb2RhbC5zaG93TW9kYWwoKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbn0pXHJcblxyXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKVxyXG59KVxyXG5cclxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RGb3JtLnRpdGxlLnZhbHVlLCBwcm9qZWN0Rm9ybS5kYXRlLnZhbHVlLCBwcm9qZWN0Rm9ybS5wcmlvcml0eS52YWx1ZSlcclxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpXHJcbn0pXHJcblxyXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0Zvcm0udGl0bGUudmFsdWUsIHRhc2tGb3JtLmRhdGUudmFsdWUsIHRhc2tGb3JtLnByaW9yaXR5LnZhbHVlKVxyXG4gICAgLy9maW5kIGN1cnJlbnQgcHJvamVjdFxyXG4gICAgZmluZFByb2plY3QocHJvamVjdHMpXHJcbiAgICBjb25zb2xlLmxvZyhjb3JyZWN0SW5kZXgpXHJcbiAgICBwcm9qZWN0c1tjb3JyZWN0SW5kZXhdLnByb2plY3RUYXNrcy5wdXNoKHRhc2spXHJcbiAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNbY29ycmVjdEluZGV4XS5wcm9qZWN0VGFza3MpXHJcbiAgICB0YXNrRm9ybS5yZXNldCgpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvamVjdChwcm9qZWN0QXJyYXkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHByb2plY3RBcnJheVtpXS50aXRsZSA9PT0gc2VsZWN0ZWRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmb3VuZDogJHtzZWxlY3RlZFByb2plY3R9IGluZGV4OiAke2l9YClcclxuICAgICAgICAgICAgY29ycmVjdEluZGV4ID0gaVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3JyZWN0SW5kZXgsIHNlbGVjdGVkUHJvamVjdFxyXG59XHJcblxyXG5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0cylcclxucmVuZGVyVGFza3MoZGVmYXVsdFRhc2tzKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gcHJvamVjdCgpXHJcbi8vIHRhc2soKVxyXG4vLyBwcmlvcml0eSgpXHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3QucHJvamVjdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=