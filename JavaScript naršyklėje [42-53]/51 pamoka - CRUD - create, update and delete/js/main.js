const todoList = document.querySelector('.js-todo-list');
const formAddTodo = document.querySelector('.js-add-todo-form');

const addTodoItem = ({ completed, title }) => {
  const todoItem = document.createElement('div');
  todoItem.className = 'todo-list__item';

  const checkbox = document.createElement('div');
  checkbox.className = 'checkbox';
  if (completed) checkbox.classList.add('checked');
  checkbox.addEventListener('click', () => console.log('Paspausta check'));

  const todoItemText = document.createElement('div');
  todoItemText.className = 'todo-list__item__text';
  todoItemText.innerText = title;

  const btnDelete = document.createElement('button');
  btnDelete.className = 'button';
  btnDelete.innerText = '✖';
  btnDelete.addEventListener('click', () => console.log('Paspausta delete'));

  todoItem.append(
    checkbox,
    todoItemText,
    btnDelete
  );

  todoList.appendChild(todoItem);
}

formAddTodo.addEventListener('submit', (event) => {
  event.preventDefault();

  addTodoItem({
    title: formAddTodo[0].value,
    completed: false,
  })
});

const displayItems = (items) => items.forEach(addTodoItem);

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
