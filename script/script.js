const inputField = document.querySelector('.task-input');
const addButton = document.getElementById('input-form');
const todoList = document.getElementById('todo-list');

function addTask(e) {
    e.preventDefault();

    const inputValue = inputField.value.trim();

    if (inputValue) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const checkmark = document.createElement('div');
        checkmark.classList.add('checkmark');

        const todoTask = document.createElement('p');
        todoTask.textContent = inputValue;

        const deleteButton = document.createElement('img');
        deleteButton.src = "img/del icon.png";
        deleteButton.classList.add('del-icon');

        todoItem.appendChild(checkmark);
        todoItem.appendChild(todoTask);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);

        inputField.value = '';
    }
}

addButton.addEventListener('submit', addTask);

todoList.addEventListener('click', (e) => {
   if (e.target.classList.contains('del-icon')) {
       const todoItem = e.target.closest('.todo-item');
       if (todoItem) {
           todoList.removeChild(todoItem);
       }
   } else if (e.target.closest('.todo-item')) {
       const checkmark = e.target.closest('.todo-item').querySelector('.checkmark');
       const todoTask = e.target.closest('.todo-item').querySelector('p');

       checkmark.classList.toggle('checked');
       todoTask.classList.toggle('task-completed');
   }
});