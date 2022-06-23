import FormComponent from "./components/form-component.js";
import todoValidator from "./helpers/validators/todo-validator.js";
import ApiService from "./helpers/api-service.js";

// Surandame elementę, į kurį dėsime TodoItem'us
const todoList = document.querySelector('.js-todo-list'); // <div class="js-todo-list todo-list"></div>
const updateFormModal = new bootstrap.Modal('#update-form-modal');
const updateTitleField = document.querySelector('#update-title-input');
const updateCompletedField = document.querySelector('#update-completed-input');
const btnUpdateTodo = document.querySelector('#btn-update-todo');
let editableTodoId = null;
let editableTodoItemText = null;
let editableCheckbox = null;

const updateTodo = async () => {
  const { title, completed } = await ApiService.updateTodo({
    id: editableTodoId,
    title: updateTitleField.value,
    completed: updateCompletedField.checked,
  });

  editableTodoItemText.innerText = title;
  editableCheckbox.classList.remove('checked');
  if (completed) editableCheckbox.classList.add('checked');

  editableTodoId = null;
  editableTodoItemText = null;
  editableCheckbox = null;
}

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
  checkbox.addEventListener('click', async () => {
    await ApiService.updateTodo({
      id,
      completed: !checkbox.classList.contains('checked')
    });

    checkbox.classList.toggle('checked');
  });

  const todoItemText = document.createElement('div'); // <div></div>
  todoItemText.className = 'todo-list__item__text'; // <div class="todo-list__item__text"></div>
  todoItemText.innerText = title; // <div class="todo-list__item__text">{{ title }}</div>

  const btnUpdate = document.createElement('button'); // <button></button>
  btnUpdate.className = 'button'; // <button class="button"</button>
  btnUpdate.innerText = '↻'; // <button class="button">✖</button>
  btnUpdate.addEventListener('click', () => {
    updateTitleField.value = todoItemText.innerText;
    updateCompletedField.checked = checkbox.classList.contains('checked');
    editableTodoId = id;
    editableTodoItemText = todoItemText;
    editableCheckbox = checkbox;

    updateFormModal.show();
  });

  const btnDelete = document.createElement('button'); // <button></button>
  btnDelete.className = 'button'; // <button class="button"</button>
  btnDelete.innerText = '✖'; // <button class="button">✖</button>
  btnDelete.addEventListener('click', async () => {
    await ApiService.deleteTodo(id);
    todoItem.remove();
  });

  todoItem.append(  // <div class="todo-list__item">
    checkbox,       //   <div class="checkbox checked"></div>
    todoItemText,   //   <div class="todo-list__item__text">{{ text }}</div>
    btnUpdate,
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

btnUpdateTodo.addEventListener('click', () => {
  updateTodo();
  updateFormModal.hide();
});


/* 
  Data-based-rendering
    * Atvaizdavimui skirti duomenys saugomi bendrai pasiekiamoje vietoje
    * 1 funkcija skirta atvaizdavimui, kuri kviečiama kiekvieną kartą kai keičiasi duomenys
    * Visų EventLister'ių funkcijos keičia duomenis
*/
