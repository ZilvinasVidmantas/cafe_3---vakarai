const todoList = document.querySelector('.js-todo-list');
const formAddTodo = document.querySelector('.js-add-todo-form');

formAddTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoListValue = formAddTodo[0].value;

  todoList.innerHTML += `
  <div class="todo-list__item">
    <div class="checkbox"></div>
    <div class="todo-list__item__text">${todoListValue}</div> 
    <button class="button">✖</button>
  </div>`;
});

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
  Kodo peržiūra [10]
    1. Suformuoti klausimus, jei kas nors neaišku
    2. Pasiūlyti variantų, kaip būtų galima patobulinti šį kodą

  Pertrauka [10]

  Tęsiame 19:15


*/




/*
  C - create
  // R - read
  U - update
  D - delete

  20:05 - Klausimai ir atsakymai
*/
