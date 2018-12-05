import React from "react";
import ReactDOM from "react-dom";
//import "./styles.css";

const todoArr = [
  {
    id: 1528817077286,
    task: "Organize Garage",
    completed: false
  },
  {
    id: 1528817084358,
    task: "Clean Room",
    completed: false
  }
];

const Todo = props => {
  const { task } = props.todoProp;
  return (
    <div>{task}</div>
  );
};

const TodoForm = props => {
  return (
    <form onSubmit={props.handleUpdateState}>
      <input
        name="task"
        value={props.task}
        placeholder="...todo"
        onChange={props.handleInputChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoArr,
      task: ""
    };
  }

  handleUpdateState = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    // clone our state todos array.
    todos.push({
      id: new Date(),
      task: this.state.task,
      completed: false
    });
    // push our new todo item into the todos array.
    this.setState({ todos: todos });
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => (
          <Todo todoProp={todo} />
        ))}
        <form onSubmit={this.handleUpdateState}>
          <input
            name="task"
            value={this.state.task}
            placeholder="...todo"
            onChange={this.handleInputChange}
          />
          <button>Add Todo</button>
        </form>
        <button>Clear Completed</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
