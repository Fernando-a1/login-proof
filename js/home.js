document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const taskTitle = document.getElementById("taskTitle").value;
  const taskDate = document.getElementById("taskDate").value;
  const taskDescription = document.getElementById("taskDescription").value;

  if (!taskTitle || !taskDate || !taskDescription) {
    showToast("Please fill out all fields!");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create new task item
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  // Task title
  const titleElement = document.createElement("div");
  titleElement.classList.add("task-title");
  titleElement.textContent = taskTitle;

  // Task date
  const dateElement = document.createElement("div");
  dateElement.classList.add("task-date");
  dateElement.textContent = `Due: ${taskDate}`;

  // Task description
  const descElement = document.createElement("div");
  descElement.classList.add("task-desc");
  descElement.textContent = taskDescription;

  // Create action buttons (complete, archive, delete)
  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add("complete-btn");
  completeButton.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  const archiveButton = document.createElement("button");
  archiveButton.textContent = "Archive";
  archiveButton.classList.add("archive-btn");
  archiveButton.addEventListener("click", () => {
    archiveTask(taskItem);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
    showToast("Task deleted");
  });

  // Append buttons to actions div
  taskActions.appendChild(completeButton);
  taskActions.appendChild(archiveButton);
  taskActions.appendChild(deleteButton);

  // Append elements to task item
  taskItem.appendChild(titleElement);
  taskItem.appendChild(dateElement);
  taskItem.appendChild(descElement);
  taskItem.appendChild(taskActions);

  // Add task item to task list
  taskList.appendChild(taskItem);

  // Clear input fields
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDate").value = "";
  document.getElementById("taskDescription").value = "";
}

// Archive task function
function archiveTask(taskItem) {
  const archivedList = document.getElementById("archivedList");

  // Remove task from the task list
  const taskList = document.getElementById("taskList");
  taskList.removeChild(taskItem);

  // Mark as archived
  taskItem.classList.add("archived");

  // Add task to archived list
  archivedList.appendChild(taskItem);
  showToast("Task archived");
}

// Toast notification function
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
