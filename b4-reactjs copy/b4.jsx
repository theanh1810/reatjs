
  const TodoList = ({ todos}) => {
    const list = todos.map((todo) => <Todo todos={todo} />);
    return <div className="todo-list">{list}</div>;
  };

  TodoList.propTypes = {
    TodoS: PropTypes.arrayOf(TodoTypes),
  };

const Todo = ({ Todo }) => {
  return (
    <div className="pokemon">
      <p>{Todo.userId}</p>
      <p>{Todo.id}</p>

      <h3>{ Todo.title}</h3>

      <div>{Todo.completed}</div>
    </div>
  );
};

const TodoTypes = PropTypes.exact({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool
 
});

Todo.propTypes = {
  todo: TodoTypes,
};

const App = () => {

  // client state
  const [todos, setTodos] = React.useState(0)

  //server state
  React.useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/todos", {
      signal: controller.signal ,
    }).then((res) => res.json())
      .then((data) => {
      setTodos(data)
    } )

    return () => {
      controller.abort();
    }
  }, [])
  return (
    <div className="todo-app">
        <h1 className="heading">Todo-List</h1>
        <TodoList todoS={todos} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"))

root.render(<App />
)

