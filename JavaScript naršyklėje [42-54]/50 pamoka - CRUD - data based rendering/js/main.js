const todoList = document.querySelector('.js-todo-list');

const displayItems = (items) => items.forEach(item => {

  todoList.innerHTML += `
  <div class="todo-list__item">
    <div class="checkbox${item.completed ? ' checked' : ''}"></div>
    <div class="todo-list__item__text">${item.title}</div>
  </div> `
});

fetch('https://jsonplaceholder.typicode.com/todos?userId=2')
  .then(response => response.json())
  .then(displayItems);


/*
  C - create
  // R - read
  U - update
  D - delete
*/