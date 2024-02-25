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
}

function removeTask(index) {
  tasksInArray.splice(index, 1);
  displayTasks();
}
function editTask(index) {
  const newTask = prompt("Enter a New Task");
  if (newTask == null) {
    return;
  }
  tasksInArray[index] = newTask.trim();
  displayTasks();
}

function displayTasks() {
  tasks.innerHTML = "";
  tasksInArray.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");
    const taskspan = document.createElement("span");
    taskspan.textContent = task;
    listItem.appendChild(taskspan);
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
  counter.textContent = "Counter :" + tasksInArray.length;
}
tasksInArray.push("Feeding my cat");
tasksInArray.push("Gym");
displayTasks();
