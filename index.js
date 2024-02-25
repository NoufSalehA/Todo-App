const todoEnter = document.querySelector(".todo-enter"); //the input
const submit = document.querySelector(".todo-btn"); //the button
const tasks = document.querySelector(".todo-list"); ///the todo list
const counter = document.querySelector(".todo-counter"); //the total number of todo list
//empty array to save -store the task
const tasksInArray = [];
submit.addEventListener("click", addTasks);
function addTasks() {
  const task = todoEnter.value.trim();
  if (task == "") {
    return;
  }
  tasksInArray.push(task); ///added to array
  displayTasks();
  todoEnter.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasksInArray));
  displayTasks();
}

function removeTask(index) {
  tasksInArray.splice(index, 1);
  displayTasks();
  localStorage.setItem("tasks", JSON.stringify(tasksInArray));
  displayTasks();
}
function editTask(index) {
  const newTask = prompt("Enter a New Task", "").trim();
  if (newTask == "") {
    return;
  }
  tasksInArray[index] = newTask.trim();
  displayTasks();
  localStorage.setItem("tasks", JSON.stringify(tasksInArray));
  displayTasks();
}

function displayTasks() {
  tasks.innerHTML = "";
  tasksInArray.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task;
    listItem.appendChild(taskSpan);
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      editTask(index);
    });
    listItem.appendChild(editBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      removeTask(index);
    });
    listItem.appendChild(deleteBtn);
    tasks.appendChild(listItem);
  });
  counter.textContent = "Counter:" + tasksInArray.length;
}
displayTasks();
const storedTask = localStorage.getItem("tasks");
if (storedTask) {
  tasksInArray.push(...JSON.parse(storedTask));
}
displayTasks();
