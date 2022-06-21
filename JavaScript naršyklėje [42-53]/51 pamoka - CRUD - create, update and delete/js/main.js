const todoList = document.querySelector('.js-todo-list');

const displayItems = (items) => items.forEach(({ completed, title }) => {
  todoList.innerHTML += `
  <div class="todo-list__item">
    <div class="checkbox${completed ? ' checked' : ''}"></div>
    <div class="todo-list__item__text">${title}</div>
    <button class="button">✖</button>
  </div>`;
});

fetch('https://jsonplaceholder.typicode.com/todos?userId=7')
  .then(response => response.json())
  .then(displayItems);

/*
  C - create
  // R - read
  U - update
  D - delete

  20:05 - Klausimai ir atsakymai
*/
