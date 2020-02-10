import React from 'react';
import uuid from 'uuid';

// we have used several things from "this":
//   this.state.newTodoTitle
//   this.state.todos    // on this one, we used this.state.todos.map()
//   this.setState       // to change any slice, takes a callback, which takes "oldState"
//   this.props.player   // we access props using this.props
//   this.onNewTaskInputChange

// we need some initial data
const initialTodos = [
  {
    task: 'Organize Garage',
    id: uuid(),
    completed: true
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
      newTodoTitle: '',
      player: props.player, // usually bad idea to init state from props
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
        // with hooks we'd simply do:
        // useEffect(() => {
        //   fakeTodosEndpoint()
        //     .then(todos => setTodos(todos))
        // }, [])
      })
  }

  onNewTaskInputChange = event => {
    // use fat arrow syntax for your
    // custom methods (like our state updaters) !!!!! IMPORTANT
    // we need to update a slice of state
    // this.setState can either take an object OR a callback
    const newValue = event.target.value;
    console.log('the newValue of the input', newValue);

    this.setState(oldState => {
      return {
        // overrides to the state, as many as we need
        newTodoTitle: newValue,
        player: 'Dimos', // this is silly
      }
    })
  }

  onTodoAdd = event => {
    console.log('adding todo');
    this.setState(oldState => {
      return {
        // DO NOT FORGET
        // return an object with our overrides! (which slice)
        newTodoTitle: '',
        todos: oldState.todos.concat({
          completed: false,
          id: uuid(),
          task: oldState.newTodoTitle
        })
      }
    })
  }

  markCompleted = id => {
    this.setState(oldState => {
      return {
        todos: oldState.map(todo => {
          // if not the id we are interested in, just return todo unchanged
          // otherwise return a todo, identical but with a completed of true
        })
      }
    })
  }

  render() {
    // where are the todos???????
    // the todos live inside this.state.todos // array of todos

    // where is the input value??????
    // the current value of the input is held inside this.state.newTodoTitle
    return (
      <>
        <h3>The player is {this.state.player}</h3>
        <div className='TodoList'>
          {
            // how do we iterate and render each todo?
            this.state.todos.map(todo => {
              // { completed: false, id: "1234", task: "make dinner" }
              const color = todo.completed ? 'green' : 'red'
              return (
                <div
                  style={{ color }}
                  className="Todo"
                  key={todo.id}
                >
                  {todo.task}
                  <button
                    onClick={event => this.markCompleted(todo.id)}
                  >
                    mark completed
                  </button>
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
            onChange={this.onNewTaskInputChange}
          />
          <button
            onClick={this.onTodoAdd}
          >
            Add new todo
          </button>
        </div>
      </>
    );
  }
}

export default App;
