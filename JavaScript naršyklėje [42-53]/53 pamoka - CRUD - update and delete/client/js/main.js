import FormComponent from "./components/form-component.js";
import todoValidator from "./helpers/validators/todo-validator.js";
import ApiService from "./helpers/api-service.js";

// Surandame elementę, į kurį dėsime TodoItem'us
const todoList = document.querySelector('.js-todo-list'); // <div class="js-todo-list todo-list"></div>

// Funkcija, kuri priimą objektą, ir pagal priimtą objektą, sukurią naują TodoItem'ą į įdeda jį
// į "todoList" kintamajį
const displayTodoItem = ({
  completed,
  title,
  id,
}) => {
  const todoItem = document.createElement('div'); // <div></div>
  todoItem.className = 'todo-list__item'; // <div class="todo-list__item"></div>

  const checkbox = document.createElement('div');  // <div></div>
  checkbox.className = 'checkbox';  // <div class="checkbox"></div>
  if (completed) checkbox.classList.add('checked'); // <div class="checkbox checked"></div>
  checkbox.addEventListener('click', () => console.log('Paspausta check'));

  const todoItemText = document.createElement('div'); // <div></div>
  todoItemText.className = 'todo-list__item__text'; // <div class="todo-list__item__text"></div>
  todoItemText.innerText = title; // <div class="todo-list__item__text">{{ title }}</div>

  const btnDelete = document.createElement('button'); // <button></button>
  btnDelete.className = 'button'; // <button class="button"</button>
  btnDelete.innerText = '✖'; // <button class="button">✖</button>
  btnDelete.addEventListener('click', async () => {
    await ApiService.deleteDoto(id);
    todoItem.remove();
  });

  todoItem.append(  // <div class="todo-list__item">
    checkbox,       //   <div class="checkbox checked"></div>
    todoItemText,   //   <div class="todo-list__item__text">{{ text }}</div>
    btnDelete       //   <button class="button">✖</button>
  );                // </div>

  /*
   <div class="js-todo-list todo-list">
      {todoItem}  <- afterBegin
      ...
   </div>
  */
  todoList.insertAdjacentElement('afterBegin', todoItem);
}

// Kuriame Formos komponentą, kuris konstravimo metu paruošia validavimo procesą
const formAddTodo = new FormComponent(
  '.js-add-todo-form', /* selector */
  todoValidator, /* formatErrors */
  // OnSuccess handler
  async ({ title }) => {
    const createdTodo = await ApiService.createTodo({ title });
    displayTodoItem(createdTodo);
  }
);

// Pradinių duomenų parsiuntimas
const todos = await ApiService.fetchTodos();
todos.forEach(displayTodoItem);
