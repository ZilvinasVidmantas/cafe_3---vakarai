import FormComponent from "./components/form-component.js";
import todoValidator from "./helpers/validators/todo-validator.js";

const todoList = document.querySelector('.js-todo-list');

const addTodoItem = ({
  completed = false,
  title
}) => {
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

  todoList.insertAdjacentElement('afterBegin', todoItem);
}

// Pertrauka
// Kodo Peržiūra
// Klausimai ir atsakymai 21:45

const formAddTodo = new FormComponent(
  '.js-add-todo-form', /* selector */
  todoValidator, /* formatErrors */
  addTodoItem, /* onSuccess */
);

const displayItems = (items) => items.forEach(addTodoItem);

fetch('https://jsonplaceholder.typicode.com/todos?userId=7')
  .then(response => response.json())
  .then(displayItems);

