// API - application programing interface
// sąsaja su kita programa

const fetchTodos = async () => {
  const response = await fetch('http://localhost:1337/todos'); // GET
  const todos = await response.json();

  return todos;
};

const createTodo = async ({ title }) => {
  const response = await fetch(
    'http://localhost:1337/todos',
    // ↓↓↓ Užklausos savybės ↓↓↓
    {
      method: 'POST', // Užklausos siuntimo tipas
      headers: { // Nustatymai
        'Accept': 'application/json', // Tikėsis gauti tokį formatą
        'Content-Type': 'application/json' // Siųs duomenis tokiu formatu
      },
      body: JSON.stringify({ // Užklausos siunčiami duomenys
        title,
        completed: false
      })
    }
  );

  const reponseData = await response.json();

  return reponseData;
};

const updateTodo = async ({ id, ...props }) => {
  const response = await fetch(
    `http://localhost:1337/todos/${id}`,
    {
      method: 'PATCH', // Užklausos siuntimo tipas
      headers: { // Nustatymai
        'Accept': 'application/json', // Tikėsis gauti tokį formatą
        'Content-Type': 'application/json' // Siųs duomenis tokiu formatu
      },
      body: JSON.stringify(props)
    }
  );

  const reponseData = await response.json();

  return reponseData;
}

const deleteTodo = async (id) => {
  await fetch(`http://localhost:1337/todos/${id}`, { method: 'DELETE' });
};

const ApiService = {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default ApiService;
