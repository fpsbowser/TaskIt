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
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectTasks = [];
  }
}

const projectContainer = document.getElementById("project-container");
const taskHeader = document.getElementById("task-header");
const defaultProject = new Project("Default Project", "2420-06-06", "Low");
const projects = [defaultProject];
let selectedProject = "";
let correctIndex = 0;

let i = 0;

// FUNCTIONS ----------------------------------------------------------------------

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectContainer.appendChild(projectCard);
  projectCard.addEventListener("click", (e) => {
    if (e.target == deleteButton) {
      return;
    } else if (e.target == projectCard) {
      taskHeader.textContent = `Tasks for ${e.target.firstChild.innerText}`;
      selectedProject = e.target.firstChild.innerText;
      console.log(e.target);
      findProject(projects);
      console.log(correctIndex);
      (0,_task__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(projects[correctIndex].projectTasks);
    } else {
      taskHeader.textContent = `Tasks for ${e.target.parentElement.firstChild.innerText}`;
      selectedProject = e.target.parentElement.firstChild.innerText;
      console.log(e.target);
      findProject(projects);
      console.log(correctIndex);
      (0,_task__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(projects[correctIndex].projectTasks);
    }
  });

  const projectTitle = document.createElement("h3");
  projectTitle.innerHTML = project.title;
  projectTitle.className = "project-title";
  projectCard.appendChild(projectTitle);

  const deleteButton = document.createElement("img");
  deleteButton.src = "../assets/delete.svg";
  deleteButton.addEventListener("click", removeCard);
  projectCard.appendChild(deleteButton);
  deleteButton.className = "project-deletebtn";

  const projectDate = document.createElement("p");
  projectDate.innerText = project.dueDate;
  projectDate.className = "project-date";
  projectCard.appendChild(projectDate);

  const projectPriority = document.createElement("p");
  projectPriority.innerText = project.priority;
  projectPriority.className = "project-priority";
  projectCard.appendChild(projectPriority);
}

function renderProjects(projectArray) {
  for (i; i < projectArray.length; i++) {
    createProjectCard(projectArray[i]);
  }
}

function removeCard(card) {
  (0,_task__WEBPACK_IMPORTED_MODULE_0__.removeElementsByClassname)("task-card");
  taskHeader.textContent = "Select/Create a Project!";
  const title = card.target.parentElement.childNodes[0].innerText;
  function index(card) {
    return card.title === title;
  }
  console.log(title);
  projects.splice(projects.findIndex(index), 1);
  card.target.parentElement.remove();
  console.log(projects);
  i -= 1;
}

function findProject(projectArray) {
  for (let i = 0; i < projectArray.length; i++) {
    // console.log(projects[i].title)
    if (projectArray[i].title === selectedProject) {
      console.log(`found: ${selectedProject} index: ${i}`);
      correctIndex = i;
    }
  }
  return correctIndex, selectedProject;
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
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const taskHeader = document.getElementById("task-header");
const taskContainer = document.getElementById("task-container");
const defaultTasks = [
  new Task("Default Task #1", "2420-06-06", "High"),
  new Task("Default Task #2", "2420-06-06", "Low"),
  new Task("Default Task #3", "2420-06-06", "High"),
];

_projectDev__WEBPACK_IMPORTED_MODULE_0__.defaultProject.projectTasks = defaultTasks;

let i = 0;

//FUNCTIONS ----------------------------------------------------------------------

function createTaskCard(task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  const taskTitle = document.createElement("h3");
  taskTitle.className = "task-title";
  taskTitle.innerHTML = task.title;
  taskCard.appendChild(taskTitle);

  const taskDate = document.createElement("p");
  taskDate.className = "task-date";
  taskDate.innerText = task.dueDate;
  taskCard.appendChild(taskDate);

  const taskPriority = document.createElement("p");
  taskPriority.className = "task-priority";
  taskPriority.innerText = task.priority;
  taskCard.appendChild(taskPriority);

  const deleteButton = document.createElement("img");
  deleteButton.addEventListener("click", removeTaskCard);
  deleteButton.className = "task-delete";
  deleteButton.src = "../assets/delete.svg";
  taskCard.appendChild(deleteButton);

  const completeButton = document.createElement("img");
  completeButton.className = "complete-button";
  completeButton.src = "../assets/check-outline.svg";
  taskCard.appendChild(completeButton);
  completeButton.addEventListener("click", () => {
    taskCard.classList.toggle("completed");
    taskTitle.classList.toggle("completed-title");
  });

  // const deleteButton = document.createElement('button')
  // deleteButton.addEventListener('click', removeTaskCard)
  // deleteButton.className = 'task-delete'
  // deleteButton.innerText = 'x'
  // taskCard.appendChild(deleteButton);

  // const completeButton = document.createElement('button')
  // completeButton.className = 'complete-button'
  // completeButton.innerText = '✓'
  // taskCard.appendChild(completeButton)
  // completeButton.addEventListener('click', () => {
  //     taskCard.classList.toggle('completed')
  // })

  taskContainer.appendChild(taskCard);
}

// Render
function renderTasks(taskArray) {
  for (i; i < taskArray.length; i++) {
    createTaskCard(taskArray[i]);
  }
}

function renderProjectTasks(taskArray) {
  removeElementsByClassname("task-card");
  for (let x = 0; x < taskArray.length; x++) {
    createTaskCard(taskArray[x]);
  }
}

function removeElementsByClassname(classname) {
  const elements = document.getElementsByClassName(classname);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function removeTaskCard(task) {
  const title = task.target.parentElement.childNodes[0].innerText;
  function index(task) {
    return task.title === title;
  }
  console.log(task);
  _projectDev__WEBPACK_IMPORTED_MODULE_0__.projects[_projectDev__WEBPACK_IMPORTED_MODULE_0__.correctIndex].projectTasks.splice(
    _projectDev__WEBPACK_IMPORTED_MODULE_0__.projects[_projectDev__WEBPACK_IMPORTED_MODULE_0__.correctIndex].projectTasks.findIndex(index),
    1
  );
  task.target.parentElement.remove();
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
const projectModal = document.getElementById("project-modal");
const projectForm = document.getElementById("project-form");
const addProject = document.getElementById("project-addbtn");

// Tasks
const taskModal = document.getElementById("task-modal");
const taskForm = document.getElementById("task-form");
const addTask = document.getElementById("addtask-btn");

const closeButton = document.getElementById("closeButton");
const taskCloseButton = document.getElementById("taskCloseButton");

// Bind Events
addProject.addEventListener("click", () => {
  projectModal.showModal();
});

addTask.addEventListener("click", () => {
  taskModal.showModal();
  // console.log(projects);
});

closeButton.addEventListener("click", () => {
  console.log('test')
  projectModal.close();
});

taskCloseButton.addEventListener('click', () => {
  console.log('test')
  taskModal.close()
})

projectForm.addEventListener("submit", () => {
  const project = new _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.Project(
    projectForm.title.value,
    projectForm.date.value,
    projectForm.priority.value
  );
  _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(project);
  (0,_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects);
  console.log(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects);
  projectForm.reset();
});

taskForm.addEventListener("submit", () => {
  const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(
    taskForm.title.value,
    taskForm.date.value,
    taskForm.priority.value
  );
  //find current project
  findProject(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects);
  console.log(correctIndex);
  _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects[correctIndex].projectTasks.push(task);
  (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects[correctIndex].projectTasks);
  taskForm.reset();
});

function findProject(projectArray) {
  for (let i = 0; i < projectArray.length; i++) {
    if (projectArray[i].title === _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject) {
      console.log(`found: ${_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject} index: ${i}`);
      correctIndex = i;
    }
  }
  return correctIndex, _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject;
}

(0,_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects)
;(0,_task_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_task_js__WEBPACK_IMPORTED_MODULE_0__.defaultTasks)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsOERBQWMsQ0FBQyxvREFBUTtBQUN6QixjQUFjLG9EQUFRO0FBQ3RCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxtQkFBbUIsMENBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0RBQVE7QUFDdEI7QUFDQSxFQUFFLG9EQUFRO0FBQ1YsRUFBRSw0REFBa0IsQ0FBQyxvREFBUTtBQUM3QjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQyxrQ0FBa0MsMkRBQWU7QUFDakQsNEJBQTRCLDJEQUFlLEVBQUUsU0FBUyxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBZTtBQUN0QztBQUNBO0FBQ0EsOERBQWMsQ0FBQyxvREFBUTtBQUN2QixzREFBVyxDQUFDLGtEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza2xpc3QvLi9zcmMvcHJvamVjdERldi5qcyIsIndlYnBhY2s6Ly90YXNrbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFza2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtb3ZlRWxlbWVudHNCeUNsYXNzbmFtZSwgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vdGFza1wiO1xuXG4vLyBQcm9qZWN0IENsYXNzXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdFRhc2tzID0gW107XG4gIH1cbn1cblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5jb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWhlYWRlclwiKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIiwgXCIyNDIwLTA2LTA2XCIsIFwiTG93XCIpO1xuY29uc3QgcHJvamVjdHMgPSBbZGVmYXVsdFByb2plY3RdO1xubGV0IHNlbGVjdGVkUHJvamVjdCA9IFwiXCI7XG5sZXQgY29ycmVjdEluZGV4ID0gMDtcblxubGV0IGkgPSAwO1xuXG4vLyBGVU5DVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNhcmRcIjtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PSBkZWxldGVCdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09IHByb2plY3RDYXJkKSB7XG4gICAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gYFRhc2tzIGZvciAke2UudGFyZ2V0LmZpcnN0Q2hpbGQuaW5uZXJUZXh0fWA7XG4gICAgICBzZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldC5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgIGZpbmRQcm9qZWN0KHByb2plY3RzKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvcnJlY3RJbmRleCk7XG4gICAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNbY29ycmVjdEluZGV4XS5wcm9qZWN0VGFza3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gYFRhc2tzIGZvciAke2UudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lclRleHR9YDtcbiAgICAgIHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICBmaW5kUHJvamVjdChwcm9qZWN0cyk7XG4gICAgICBjb25zb2xlLmxvZyhjb3JyZWN0SW5kZXgpO1xuICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RzW2NvcnJlY3RJbmRleF0ucHJvamVjdFRhc2tzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcHJvamVjdFRpdGxlLmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG4gIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkZWxldGVCdXR0b24uc3JjID0gXCIuLi9hc3NldHMvZGVsZXRlLnN2Z1wiO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUNhcmQpO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJwcm9qZWN0LWRlbGV0ZWJ0blwiO1xuXG4gIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3REYXRlLmlubmVyVGV4dCA9IHByb2plY3QuZHVlRGF0ZTtcbiAgcHJvamVjdERhdGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWRhdGVcIjtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdERhdGUpO1xuXG4gIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0UHJpb3JpdHkuaW5uZXJUZXh0ID0gcHJvamVjdC5wcmlvcml0eTtcbiAgcHJvamVjdFByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJvamVjdC1wcmlvcml0eVwiO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcbiAgZm9yIChpOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlUHJvamVjdENhcmQocHJvamVjdEFycmF5W2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDYXJkKGNhcmQpIHtcbiAgcmVtb3ZlRWxlbWVudHNCeUNsYXNzbmFtZShcInRhc2stY2FyZFwiKTtcbiAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9IFwiU2VsZWN0L0NyZWF0ZSBhIFByb2plY3QhXCI7XG4gIGNvbnN0IHRpdGxlID0gY2FyZC50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dDtcbiAgZnVuY3Rpb24gaW5kZXgoY2FyZCkge1xuICAgIHJldHVybiBjYXJkLnRpdGxlID09PSB0aXRsZTtcbiAgfVxuICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5maW5kSW5kZXgoaW5kZXgpLCAxKTtcbiAgY2FyZC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICBpIC09IDE7XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0KHByb2plY3RBcnJheSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLnRpdGxlKVxuICAgIGlmIChwcm9qZWN0QXJyYXlbaV0udGl0bGUgPT09IHNlbGVjdGVkUHJvamVjdCkge1xuICAgICAgY29uc29sZS5sb2coYGZvdW5kOiAke3NlbGVjdGVkUHJvamVjdH0gaW5kZXg6ICR7aX1gKTtcbiAgICAgIGNvcnJlY3RJbmRleCA9IGk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb3JyZWN0SW5kZXgsIHNlbGVjdGVkUHJvamVjdDtcbn1cblxuZXhwb3J0IHtcbiAgUHJvamVjdCxcbiAgY3JlYXRlUHJvamVjdENhcmQsXG4gIHJlbW92ZUNhcmQsXG4gIHByb2plY3RzLFxuICByZW5kZXJQcm9qZWN0cyxcbiAgZmluZFByb2plY3QsXG4gIHNlbGVjdGVkUHJvamVjdCxcbiAgY29ycmVjdEluZGV4LFxuICBkZWZhdWx0UHJvamVjdCxcbn07XG4iLCJpbXBvcnQgeyBjb3JyZWN0SW5kZXgsIGRlZmF1bHRQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3REZXZcIjtcblxuLy8gVGFzayBDbGFzc1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5jb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWhlYWRlclwiKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stY29udGFpbmVyXCIpO1xuY29uc3QgZGVmYXVsdFRhc2tzID0gW1xuICBuZXcgVGFzayhcIkRlZmF1bHQgVGFzayAjMVwiLCBcIjI0MjAtMDYtMDZcIiwgXCJIaWdoXCIpLFxuICBuZXcgVGFzayhcIkRlZmF1bHQgVGFzayAjMlwiLCBcIjI0MjAtMDYtMDZcIiwgXCJMb3dcIiksXG4gIG5ldyBUYXNrKFwiRGVmYXVsdCBUYXNrICMzXCIsIFwiMjQyMC0wNi0wNlwiLCBcIkhpZ2hcIiksXG5dO1xuXG5kZWZhdWx0UHJvamVjdC5wcm9qZWN0VGFza3MgPSBkZWZhdWx0VGFza3M7XG5cbmxldCBpID0gMDtcblxuLy9GVU5DVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZCh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NhcmQuY2xhc3NOYW1lID0gXCJ0YXNrLWNhcmRcIjtcblxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRhc2tUaXRsZS5jbGFzc05hbWUgPSBcInRhc2stdGl0bGVcIjtcbiAgdGFza1RpdGxlLmlubmVySFRNTCA9IHRhc2sudGl0bGU7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0RhdGUuY2xhc3NOYW1lID0gXCJ0YXNrLWRhdGVcIjtcbiAgdGFza0RhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG5cbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tQcmlvcml0eS5jbGFzc05hbWUgPSBcInRhc2stcHJpb3JpdHlcIjtcbiAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2sucHJpb3JpdHk7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrQ2FyZCk7XG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcInRhc2stZGVsZXRlXCI7XG4gIGRlbGV0ZUJ1dHRvbi5zcmMgPSBcIi4uL2Fzc2V0cy9kZWxldGUuc3ZnXCI7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb21wbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWJ1dHRvblwiO1xuICBjb21wbGV0ZUJ1dHRvbi5zcmMgPSBcIi4uL2Fzc2V0cy9jaGVjay1vdXRsaW5lLnN2Z1wiO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZC10aXRsZVwiKTtcbiAgfSk7XG5cbiAgLy8gY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgLy8gZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVGFza0NhcmQpXG4gIC8vIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAndGFzay1kZWxldGUnXG4gIC8vIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAneCdcbiAgLy8gdGFza0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAvLyBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIC8vIGNvbXBsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdjb21wbGV0ZS1idXR0b24nXG4gIC8vIGNvbXBsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICfinJMnXG4gIC8vIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKVxuICAvLyBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gICAgIHRhc2tDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpXG4gIC8vIH0pXG5cbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG59XG5cbi8vIFJlbmRlclxuZnVuY3Rpb24gcmVuZGVyVGFza3ModGFza0FycmF5KSB7XG4gIGZvciAoaTsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZVRhc2tDYXJkKHRhc2tBcnJheVtpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKHRhc2tBcnJheSkge1xuICByZW1vdmVFbGVtZW50c0J5Q2xhc3NuYW1lKFwidGFzay1jYXJkXCIpO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IHRhc2tBcnJheS5sZW5ndGg7IHgrKykge1xuICAgIGNyZWF0ZVRhc2tDYXJkKHRhc2tBcnJheVt4XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHNCeUNsYXNzbmFtZShjbGFzc25hbWUpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzbmFtZSk7XG4gIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgZWxlbWVudHNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50c1swXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0NhcmQodGFzaykge1xuICBjb25zdCB0aXRsZSA9IHRhc2sudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5pbm5lclRleHQ7XG4gIGZ1bmN0aW9uIGluZGV4KHRhc2spIHtcbiAgICByZXR1cm4gdGFzay50aXRsZSA9PT0gdGl0bGU7XG4gIH1cbiAgY29uc29sZS5sb2codGFzayk7XG4gIHByb2plY3RzW2NvcnJlY3RJbmRleF0ucHJvamVjdFRhc2tzLnNwbGljZShcbiAgICBwcm9qZWN0c1tjb3JyZWN0SW5kZXhdLnByb2plY3RUYXNrcy5maW5kSW5kZXgoaW5kZXgpLFxuICAgIDFcbiAgKTtcbiAgdGFzay50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgLy8gaSAtPSAxXG59XG5cbmV4cG9ydCB7XG4gIFRhc2ssXG4gIGRlZmF1bHRUYXNrcyxcbiAgcmVuZGVyVGFza3MsXG4gIHJlbmRlclByb2plY3RUYXNrcyxcbiAgcmVtb3ZlRWxlbWVudHNCeUNsYXNzbmFtZSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRhc2ssIHJlbmRlclRhc2tzLCByZW5kZXJQcm9qZWN0VGFza3MsIGRlZmF1bHRUYXNrcyB9IGZyb20gXCIuL3Rhc2suanNcIjtcclxuaW1wb3J0IHtcclxuICBQcm9qZWN0LFxyXG4gIHByb2plY3RzLFxyXG4gIHJlbmRlclByb2plY3RzLFxyXG4gIHNlbGVjdGVkUHJvamVjdCxcclxufSBmcm9tIFwiLi9wcm9qZWN0RGV2LmpzXCI7XHJcblxyXG4vLyBHbG9iYWxcclxubGV0IGNvcnJlY3RJbmRleCA9IDA7XHJcblxyXG4vLyBET00gRWxlbWVudHNcclxuLy8gUHJvamVjdHNcclxuY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW1vZGFsXCIpO1xyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpO1xyXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWFkZGJ0blwiKTtcclxuXHJcbi8vIFRhc2tzXHJcbmNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1tb2RhbFwiKTtcclxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZm9ybVwiKTtcclxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkdGFzay1idG5cIik7XHJcblxyXG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VCdXR0b25cIik7XHJcbmNvbnN0IHRhc2tDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Nsb3NlQnV0dG9uXCIpO1xyXG5cclxuLy8gQmluZCBFdmVudHNcclxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHByb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcclxufSk7XHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgdGFza01vZGFsLnNob3dNb2RhbCgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxufSk7XHJcblxyXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCd0ZXN0JylcclxuICBwcm9qZWN0TW9kYWwuY2xvc2UoKTtcclxufSk7XHJcblxyXG50YXNrQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3Rlc3QnKVxyXG4gIHRhc2tNb2RhbC5jbG9zZSgpXHJcbn0pXHJcblxyXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICBwcm9qZWN0Rm9ybS50aXRsZS52YWx1ZSxcclxuICAgIHByb2plY3RGb3JtLmRhdGUudmFsdWUsXHJcbiAgICBwcm9qZWN0Rm9ybS5wcmlvcml0eS52YWx1ZVxyXG4gICk7XHJcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gIHByb2plY3RGb3JtLnJlc2V0KCk7XHJcbn0pO1xyXG5cclxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxyXG4gICAgdGFza0Zvcm0udGl0bGUudmFsdWUsXHJcbiAgICB0YXNrRm9ybS5kYXRlLnZhbHVlLFxyXG4gICAgdGFza0Zvcm0ucHJpb3JpdHkudmFsdWVcclxuICApO1xyXG4gIC8vZmluZCBjdXJyZW50IHByb2plY3RcclxuICBmaW5kUHJvamVjdChwcm9qZWN0cyk7XHJcbiAgY29uc29sZS5sb2coY29ycmVjdEluZGV4KTtcclxuICBwcm9qZWN0c1tjb3JyZWN0SW5kZXhdLnByb2plY3RUYXNrcy5wdXNoKHRhc2spO1xyXG4gIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0c1tjb3JyZWN0SW5kZXhdLnByb2plY3RUYXNrcyk7XHJcbiAgdGFza0Zvcm0ucmVzZXQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvamVjdChwcm9qZWN0QXJyYXkpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHByb2plY3RBcnJheVtpXS50aXRsZSA9PT0gc2VsZWN0ZWRQcm9qZWN0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBmb3VuZDogJHtzZWxlY3RlZFByb2plY3R9IGluZGV4OiAke2l9YCk7XHJcbiAgICAgIGNvcnJlY3RJbmRleCA9IGk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjb3JyZWN0SW5kZXgsIHNlbGVjdGVkUHJvamVjdDtcclxufVxyXG5cclxucmVuZGVyUHJvamVjdHMocHJvamVjdHMpXHJcbnJlbmRlclRhc2tzKGRlZmF1bHRUYXNrcylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9