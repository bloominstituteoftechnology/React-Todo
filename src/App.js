import React from 'react';
import uuid from 'uuid';

// we need some initial data
const initialTodos = [
  {
    task: 'Organize Garage',
    id: uuid(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: uuid(),
    completed: false
  }
];

// make a function that behaves like axios.get("todosURL")
const fakeTodosEndpoint = () => {
  return Promise.resolve(initialTodos);
};

// imagine hooks are not a thing
// and we need state
// class component it is!
class App extends React.Component {
  constructor(props) {
    // components are initialized with props
    // do not forget to call the parent constructor
    super(props);

    this.state = {
      // what slices?
      // with hooks we'd do:
      // const [todos, setTodos] = useState([])
      // const [newTodoTitle, setNewTodoTitle] = useState('')
      todos: [],
      newTodoTitle: 'Lady Gaga',
      player: props.player,
    }
  }

  componentDidMount() {
    // whatever code we put in here
    // will run only after initial render
    // good place to fetch data
    // 1- we fetch the data
    // 2- we put the data in the right slice of state
    fakeTodosEndpoint()
      .then(todos => {
        this.setState(oldState => { // oldState is the "current" this.state
          return {
            // return object with the slices that need update
            // only care about the slices that change
            todos,
            // newTodoTitle: 'lady gaga', commented out because the other slice is fine
          }
        })
      })
    // with hooks we'd do:
    // useEffect(() => {
    //   fakeTodosEndpoint()
    //     .then(todos => setTodos(todos))
    // }, [])
  }

  render() {
    // where are the todos???????
    // the todos live inside this.state.todos // array of todos
    // where is the input value??????
    // the current value of the input is held inside this.state.newTodoTitle
    return (
      <>
        <div className='TodoList'>
          {
            // how do we iterate and render each todo?
            this.state.todos.map(todo => {
              // { completed: false, id: "1234", task: "make dinner" }
              return (
                <div
                  className="Todo"
                  key={todo.id}
                >
                  {todo.task}
                </div>
              );
            })
          }
        </div>

        <div className="TodoForm">
          <input
            type="text"
            placeholder='type the task!'
            value={this.state.newTodoTitle}
          />
        </div>
      </>
    );
  }
}

export default App;
