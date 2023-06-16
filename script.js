const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;

    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done';
    doneBtn.classList.add('done');
    doneBtn.addEventListener('click', markTaskDone);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Del';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', deleteTask);

    listItem.appendChild(taskSpan);
    listItem.appendChild(doneBtn);
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);

    taskInput.value = '';
  }
}

function markTaskDone(event) {
  const taskSpan = event.target.previousSibling;
  taskSpan.style.textDecoration = 'line-through';
}

function deleteTask(event) {
  const listItem = event.target.parentElement;
  taskList.removeChild(listItem);
}
