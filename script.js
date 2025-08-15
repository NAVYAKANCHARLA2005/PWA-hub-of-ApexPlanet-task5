let tasks = [];

window.onload = function () {
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    renderTasks();
  }
};

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const newTask = {
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "task-text";
    span.addEventListener("click", () => toggleComplete(index));

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons";

    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    doneBtn.title = "Mark as Done";
    doneBtn.addEventListener("click", () => toggleComplete(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.title = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    buttonsDiv.appendChild(doneBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonsDiv);
    taskList.appendChild(li);
  });
}
