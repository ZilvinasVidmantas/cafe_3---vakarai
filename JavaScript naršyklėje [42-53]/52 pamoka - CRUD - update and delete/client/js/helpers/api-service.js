// API - application programing interface
// sąsaja su kita programa

const fetchTodos = async () => {
  const response = await fetch('http://localhost:1337/todos'); // GET
  const todos = await response.json();

  return todos;
}

const createTodo = async ({ title }) => {
  const response = await fetch('http://localhost:1337/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      completed: false
    })
  });

  const reponseData = await response.json();

  return reponseData;
};

const ApiService = {
  fetchTodos,
  createTodo
}

export default ApiService;