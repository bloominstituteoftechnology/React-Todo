import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
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
    // update/replace the state array with this new array with the added item
    this.setState({ todos: todos, task: "" });
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm
          value={this.state.task}
          handleAdds={this.handleUpdateState}
          handleChange={this.handleInputChange}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
