/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/projectDev.js":
      /*!***************************!*\
  !*** ./src/projectDev.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Project: () => /* binding */ Project,
          /* harmony export */ correctIndex: () => /* binding */ correctIndex,
          /* harmony export */ createProjectCard: () =>
            /* binding */ createProjectCard,
          /* harmony export */ defaultProject: () =>
            /* binding */ defaultProject,
          /* harmony export */ findProject: () => /* binding */ findProject,
          /* harmony export */ projects: () => /* binding */ projects,
          /* harmony export */ removeCard: () => /* binding */ removeCard,
          /* harmony export */ renderProjects: () =>
            /* binding */ renderProjects,
          /* harmony export */ selectedProject: () =>
            /* binding */ selectedProject,
          /* harmony export */
        });
        /* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./task */ "./src/task.js");

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
        const defaultProject = new Project(
          "Default Project",
          "2420-06-06",
          "Low"
        );
        const projects = [defaultProject];
        let selectedProject = "";
        let correctIndex = 0;

        let i = 0;

        //FUNCTIONS ----------------------------------------------------------------------

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
              (0, _task__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(
                projects[correctIndex].projectTasks
              );
            } else {
              taskHeader.textContent = `Tasks for ${e.target.parentElement.firstChild.innerText}`;
              selectedProject = e.target.parentElement.firstChild.innerText;
              console.log(e.target);
              findProject(projects);
              console.log(correctIndex);
              (0, _task__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(
                projects[correctIndex].projectTasks
              );
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
          // const deleteButton = document.createElement('button')
          // deleteButton.addEventListener('click', removeCard)
          // deleteButton.className = 'project-deletebtn'
          // deleteButton.innerText = 'x'
          // projectCard.appendChild(deleteButton);

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
          (0, _task__WEBPACK_IMPORTED_MODULE_0__.removeElementsByClassname)(
            "task-card"
          );
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

        /***/
      },

    /***/ "./src/task.js":
      /*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Task: () => /* binding */ Task,
          /* harmony export */ defaultTasks: () => /* binding */ defaultTasks,
          /* harmony export */ removeElementsByClassname: () =>
            /* binding */ removeElementsByClassname,
          /* harmony export */ renderProjectTasks: () =>
            /* binding */ renderProjectTasks,
          /* harmony export */ renderTasks: () => /* binding */ renderTasks,
          /* harmony export */
        });
        /* harmony import */ var _projectDev__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./projectDev */ "./src/projectDev.js");

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

        _projectDev__WEBPACK_IMPORTED_MODULE_0__.defaultProject.projectTasks =
          defaultTasks;

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
          _projectDev__WEBPACK_IMPORTED_MODULE_0__.projects[
            _projectDev__WEBPACK_IMPORTED_MODULE_0__.correctIndex
          ].projectTasks.splice(
            _projectDev__WEBPACK_IMPORTED_MODULE_0__.projects[
              _projectDev__WEBPACK_IMPORTED_MODULE_0__.correctIndex
            ].projectTasks.findIndex(index),
            1
          );
          task.target.parentElement.remove();
          // i -= 1
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./task.js */ "./src/task.js");
    /* harmony import */ var _projectDev_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./projectDev.js */ "./src/projectDev.js");

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

    // Bind Events
    addProject.addEventListener("click", () => {
      projectModal.showModal();
    });

    addTask.addEventListener("click", () => {
      taskModal.showModal();
      console.log(_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects);
    });

    closeButton.addEventListener("click", () => {
      projectModal.close();
    });

    projectForm.addEventListener("submit", () => {
      const project = new _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.Project(
        projectForm.title.value,
        projectForm.date.value,
        projectForm.priority.value
      );
      _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(project);
      (0, _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(
        _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects
      );
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
      _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects[
        correctIndex
      ].projectTasks.push(task);
      (0, _task_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(
        _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects[correctIndex]
          .projectTasks
      );
      taskForm.reset();
    });

    function findProject(projectArray) {
      for (let i = 0; i < projectArray.length; i++) {
        if (
          projectArray[i].title ===
          _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject
        ) {
          console.log(
            `found: ${_projectDev_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject} index: ${i}`
          );
          correctIndex = i;
        }
      }
      return (
        correctIndex,
        _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject
      );
    }

    (0, _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(
      _projectDev_js__WEBPACK_IMPORTED_MODULE_1__.projects
    );
    (0, _task_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(
      _task_js__WEBPACK_IMPORTED_MODULE_0__.defaultTasks
    );

    // project()
    // task()
    // priority()
    // console.log(project.project)
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVE7QUFDeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFPO0FBQy9CLElBQUkseURBQWE7QUFDakIsSUFBSSwrREFBYyxDQUFDLG9EQUFRO0FBQzNCLGdCQUFnQixvREFBUTtBQUN4QjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EscUJBQXFCLDBDQUFJO0FBQ3pCO0FBQ0EsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0EsSUFBSSxvREFBUTtBQUNaLElBQUksNkRBQWtCLENBQUMsb0RBQVE7QUFDL0I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0Msc0NBQXNDLDJEQUFlO0FBQ3JELGtDQUFrQywyREFBZSxFQUFFLFNBQVMsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQWU7QUFDeEM7QUFDQTtBQUNBLDhEQUFjLENBQUMsb0RBQVE7QUFDdkIsc0RBQVcsQ0FBQyxrREFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza2xpc3QvLi9zcmMvcHJvamVjdERldi5qcyIsIndlYnBhY2s6Ly90YXNrbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2tsaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFza2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtb3ZlRWxlbWVudHNCeUNsYXNzbmFtZSwgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vdGFza1wiXHJcblxyXG4vLyBQcm9qZWN0IENsYXNzIFxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLnByb2plY3RUYXNrcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJylcclxuY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWhlYWRlcicpXHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcsICcyNDIwLTA2LTA2JywgJ0xvdycpXHJcbmNvbnN0IHByb2plY3RzID0gW2RlZmF1bHRQcm9qZWN0XVxyXG5sZXQgc2VsZWN0ZWRQcm9qZWN0ID0gJydcclxubGV0IGNvcnJlY3RJbmRleCA9IDBcclxuXHJcbmxldCBpID0gMDtcclxuXHJcbi8vRlVOQ1RJT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHsgICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWNhcmQnXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZClcclxuICAgICAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PSBkZWxldGVCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09IHByb2plY3RDYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gYFRhc2tzIGZvciAke2UudGFyZ2V0LmZpcnN0Q2hpbGQuaW5uZXJUZXh0fWBcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LmZpcnN0Q2hpbGQuaW5uZXJUZXh0XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICAgICAgICAgIGZpbmRQcm9qZWN0KHByb2plY3RzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29ycmVjdEluZGV4KVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RzW2NvcnJlY3RJbmRleF0ucHJvamVjdFRhc2tzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9IGBUYXNrcyBmb3IgJHtlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuaW5uZXJUZXh0fWBcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lclRleHRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgZmluZFByb2plY3QocHJvamVjdHMpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb3JyZWN0SW5kZXgpXHJcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNbY29ycmVjdEluZGV4XS5wcm9qZWN0VGFza3MpXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXRpdGxlJ1xyXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9ICcuLi9hc3NldHMvZGVsZXRlLnN2ZydcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVDYXJkKVxyXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Byb2plY3QtZGVsZXRlYnRuJ1xyXG4gICAgICAgIC8vIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgLy8gZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlQ2FyZClcclxuICAgICAgICAvLyBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Byb2plY3QtZGVsZXRlYnRuJ1xyXG4gICAgICAgIC8vIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAneCdcclxuICAgICAgICAvLyBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHByb2plY3REYXRlLmlubmVyVGV4dCA9IHByb2plY3QuZHVlRGF0ZVxyXG4gICAgICAgIHByb2plY3REYXRlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWRhdGUnXHJcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdERhdGUpOyAgIFxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBwcm9qZWN0UHJpb3JpdHkuaW5uZXJUZXh0ID0gcHJvamVjdC5wcmlvcml0eVxyXG4gICAgICAgIHByb2plY3RQcmlvcml0eS5jbGFzc05hbWUgPSAncHJvamVjdC1wcmlvcml0eSdcclxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHkpOyBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcclxuICAgICAgICBmb3IgKGk7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdENhcmQocHJvamVjdEFycmF5W2ldKVxyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2FyZChjYXJkKSB7XHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudHNCeUNsYXNzbmFtZSgndGFzay1jYXJkJylcclxuICAgICAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gXCJTZWxlY3QvQ3JlYXRlIGEgUHJvamVjdCFcIlxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY2FyZC50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dFxyXG4gICAgICAgIGZ1bmN0aW9uIGluZGV4KGNhcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhcmQudGl0bGUgPT09IHRpdGxlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKVxyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5maW5kSW5kZXgoaW5kZXgpLCAxKVxyXG4gICAgICAgIGNhcmQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxuICAgICAgICBpIC09IDFcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kUHJvamVjdChwcm9qZWN0QXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1tpXS50aXRsZSlcclxuICAgICAgICAgICAgaWYgKHByb2plY3RBcnJheVtpXS50aXRsZSA9PT0gc2VsZWN0ZWRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZm91bmQ6ICR7c2VsZWN0ZWRQcm9qZWN0fSBpbmRleDogJHtpfWApXHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0SW5kZXggPSBpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvcnJlY3RJbmRleCwgc2VsZWN0ZWRQcm9qZWN0XHJcbiAgICB9XHJcblxyXG5leHBvcnQge1xyXG4gICAgUHJvamVjdCxcclxuICAgIGNyZWF0ZVByb2plY3RDYXJkLFxyXG4gICAgcmVtb3ZlQ2FyZCxcclxuICAgIHByb2plY3RzLFxyXG4gICAgcmVuZGVyUHJvamVjdHMsXHJcbiAgICBmaW5kUHJvamVjdCxcclxuICAgIHNlbGVjdGVkUHJvamVjdCxcclxuICAgIGNvcnJlY3RJbmRleCxcclxuICAgIGRlZmF1bHRQcm9qZWN0XHJcbn07IiwiaW1wb3J0IHsgY29ycmVjdEluZGV4LCBkZWZhdWx0UHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0RGV2XCIgXHJcblxyXG4vLyBUYXNrIENsYXNzIFxyXG4gICAgY2xhc3MgVGFzayB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5jb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staGVhZGVyJylcclxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpXHJcbmNvbnN0IGRlZmF1bHRUYXNrcyA9IFtcclxuICAgIG5ldyBUYXNrKCdEZWZhdWx0IFRhc2sgIzEnLCAnMjQyMC0wNi0wNicsICdIaWdoJyksXHJcbiAgICBuZXcgVGFzaygnRGVmYXVsdCBUYXNrICMyJywgJzI0MjAtMDYtMDYnLCAnTG93JyksXHJcbiAgICBuZXcgVGFzaygnRGVmYXVsdCBUYXNrICMzJywgJzI0MjAtMDYtMDYnLCAnSGlnaCcpXHJcbl1cclxuXHJcbmRlZmF1bHRQcm9qZWN0LnByb2plY3RUYXNrcyA9IGRlZmF1bHRUYXNrc1xyXG5cclxubGV0IGkgPSAwO1xyXG5cclxuLy9GVU5DVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmQodGFzaykgeyAgICBcclxuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGFza0NhcmQuY2xhc3NOYW1lID0gJ3Rhc2stY2FyZCdcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTmFtZSA9ICd0YXNrLXRpdGxlJ1xyXG4gICAgICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSB0YXNrLnRpdGxlXHJcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRhc2tEYXRlLmNsYXNzTmFtZSA9ICd0YXNrLWRhdGUnXHJcbiAgICAgICAgdGFza0RhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlXHJcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NOYW1lID0gJ3Rhc2stcHJpb3JpdHknXHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2sucHJpb3JpdHlcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRhc2tDYXJkKVxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAndGFzay1kZWxldGUnXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9ICcuLi9hc3NldHMvZGVsZXRlLnN2ZydcclxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnY29tcGxldGUtYnV0dG9uJ1xyXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLnNyYyA9ICcuLi9hc3NldHMvY2hlY2stb3V0bGluZS5zdmcnXHJcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pXHJcbiAgICAgICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpXHJcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQtdGl0bGUnKVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAvLyBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVUYXNrQ2FyZClcclxuICAgICAgICAvLyBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Rhc2stZGVsZXRlJ1xyXG4gICAgICAgIC8vIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAneCdcclxuICAgICAgICAvLyB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgLy8gY29tcGxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2NvbXBsZXRlLWJ1dHRvbidcclxuICAgICAgICAvLyBjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAn4pyTJ1xyXG4gICAgICAgIC8vIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKVxyXG4gICAgICAgIC8vIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZClcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW5kZXJcclxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tzKHRhc2tBcnJheSkge1xyXG4gICAgICAgIGZvciAoaTsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjcmVhdGVUYXNrQ2FyZCh0YXNrQXJyYXlbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrcyh0YXNrQXJyYXkpIHtcclxuICAgICAgICByZW1vdmVFbGVtZW50c0J5Q2xhc3NuYW1lKCd0YXNrLWNhcmQnKVxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGFza0FycmF5Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tDYXJkKHRhc2tBcnJheVt4XSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHNCeUNsYXNzbmFtZShjbGFzc25hbWUpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NuYW1lKVxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tDYXJkKHRhc2spIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRhc2sudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5pbm5lclRleHRcclxuICAgICAgICBmdW5jdGlvbiBpbmRleCh0YXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrLnRpdGxlID09PSB0aXRsZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxyXG4gICAgICAgIHByb2plY3RzW2NvcnJlY3RJbmRleF0ucHJvamVjdFRhc2tzLnNwbGljZShwcm9qZWN0c1tjb3JyZWN0SW5kZXhdLnByb2plY3RUYXNrcy5maW5kSW5kZXgoaW5kZXgpLCAxKVxyXG4gICAgICAgIHRhc2sudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgICAgICAvLyBpIC09IDFcclxuICAgIH1cclxuXHJcbiAgZXhwb3J0IHtcclxuICAgIFRhc2ssXHJcbiAgICBkZWZhdWx0VGFza3MsXHJcbiAgICByZW5kZXJUYXNrcyxcclxuICAgIHJlbmRlclByb2plY3RUYXNrcyxcclxuICAgIHJlbW92ZUVsZW1lbnRzQnlDbGFzc25hbWVcclxuICAgIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7VGFzaywgcmVuZGVyVGFza3MsIHJlbmRlclByb2plY3RUYXNrcywgZGVmYXVsdFRhc2tzfSBmcm9tICcuL3Rhc2suanMnXHJcbmltcG9ydCB7UHJvamVjdCxwcm9qZWN0cyxyZW5kZXJQcm9qZWN0cyxzZWxlY3RlZFByb2plY3R9IGZyb20gJy4vcHJvamVjdERldi5qcydcclxuXHJcbi8vIEdsb2JhbFxyXG5sZXQgY29ycmVjdEluZGV4ID0gMDtcclxuXHJcbiAvLyBET00gRWxlbWVudHNcclxuIC8vIFByb2plY3RzXHJcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW1vZGFsJylcclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJylcclxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWFkZGJ0bicpXHJcblxyXG4vLyBUYXNrc1xyXG5jb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1tb2RhbCcpXHJcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpXHJcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkdGFzay1idG4nKVxyXG5cclxuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdXR0b24nKVxyXG4gXHJcbiAvLyBCaW5kIEV2ZW50c1xyXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xyXG59KVxyXG5cclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRhc2tNb2RhbC5zaG93TW9kYWwoKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbn0pXHJcblxyXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICBwcm9qZWN0TW9kYWwuY2xvc2UoKVxyXG59KVxyXG5cclxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RGb3JtLnRpdGxlLnZhbHVlLCBwcm9qZWN0Rm9ybS5kYXRlLnZhbHVlLCBwcm9qZWN0Rm9ybS5wcmlvcml0eS52YWx1ZSlcclxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpXHJcbn0pXHJcblxyXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0Zvcm0udGl0bGUudmFsdWUsIHRhc2tGb3JtLmRhdGUudmFsdWUsIHRhc2tGb3JtLnByaW9yaXR5LnZhbHVlKVxyXG4gICAgLy9maW5kIGN1cnJlbnQgcHJvamVjdFxyXG4gICAgZmluZFByb2plY3QocHJvamVjdHMpXHJcbiAgICBjb25zb2xlLmxvZyhjb3JyZWN0SW5kZXgpXHJcbiAgICBwcm9qZWN0c1tjb3JyZWN0SW5kZXhdLnByb2plY3RUYXNrcy5wdXNoKHRhc2spXHJcbiAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNbY29ycmVjdEluZGV4XS5wcm9qZWN0VGFza3MpXHJcbiAgICB0YXNrRm9ybS5yZXNldCgpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvamVjdChwcm9qZWN0QXJyYXkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHByb2plY3RBcnJheVtpXS50aXRsZSA9PT0gc2VsZWN0ZWRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmb3VuZDogJHtzZWxlY3RlZFByb2plY3R9IGluZGV4OiAke2l9YClcclxuICAgICAgICAgICAgY29ycmVjdEluZGV4ID0gaVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3JyZWN0SW5kZXgsIHNlbGVjdGVkUHJvamVjdFxyXG59XHJcblxyXG5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0cylcclxucmVuZGVyVGFza3MoZGVmYXVsdFRhc2tzKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gcHJvamVjdCgpXHJcbi8vIHRhc2soKVxyXG4vLyBwcmlvcml0eSgpXHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3QucHJvamVjdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
