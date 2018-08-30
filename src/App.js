import  from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  
  // constructor
  constructor() {
    super();
    // add state 
    this.state = {
      input: "",
      todos: []
    };
    this.savedTodos = [];
  }

  // stretch local storage integration

  componentDidMount() {
    this.setupStateFromLocal();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocal.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocal.bind(this)
    );
    this.saveStateToLocal();
  }

  setupStateFromLocal() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocal() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
 
  
  loadState = () => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos) {
      this.setState({ todos: JSON.parse(savedTodos)});
    }
  }

  // addTodo method
  addTodo = event => {
    event.preventDefault();
    if (this.state.input === "") {
      return;
    }
    // creates a task variable
    const task = this.state.input;

    // Generate new id based on time and date
    const id = Date.now();

    // build a todo based on the task id and completed being false
    const nextTodo = {task: task, id: id, completed: false };

    // make variable to grab the todos[] from state
    let todos = this.state.todos;

    // push new todo data to the array
    todos.push(nextTodo);

    // set state to the new generated state from the new todos array
    this.setState({todos: todos, input: "" });

    // deal with local storage
    let saveState = this.state;
    localStorage.setItem("list", JSON.stringify(saveState.todos));
    localStorage.setItem("newItem", "");
  };

  // updateInput method
  updateInput = event => {
    this.setState({ input: event.target.value });
  };

  // toggleCompleted method
  toggleCompleted = id => {

    // take a sliced copy of the todos
    let todos = this.state.todos.slice();

    // map over the todos, toggle the .completed data item in the todo with matching id and return it
    todos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });

    // set the state of the old todos to the new toggled set
    this.setState({todos: todos});
  };

  // clearCompleted method
  clearCompleted = event => {

    // prevent the default behavior of the click event / button
    event.preventDefault();

    // take a sliced copy of the todos
    let todos = this.state.todos.slice();

    // filter the todos on the completed flag
    todos = todos.filter(todo => !todo.completed);

    // add the filtered todos back to the state
    this.setState({ todos: todos });
    // handle local storage
    localStorage.setItem("list", JSON.stringify(todos));
  };

  // update saved todos
  savedTodos = localStorage.getItem("todos");
  
  if(savedTodos) {
    this.setState({ todos: savedTodos});
  }

  setupStateFromLocal() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  // render method
  render() {
    return (
      <div className="main-wrapper">
        <h2>TODO LIST</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm input={this.state.input} addTodo={this.addTodo} updateInput={this.updateInput} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}
export default App;
