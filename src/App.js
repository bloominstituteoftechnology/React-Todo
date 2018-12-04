import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Task List",
      todos: ["Add A Task", "Add a second Task"],
      todo: ""
    };
  }
  changeNameHandler = event => {
    this.setState({ todo: event.target.value });
  };
  addTodo = () => {
    const todos = this.state.todos.slice();
    todos.push(this.state.todo);
    this.setState({todos: todos, todo: " "});
  }

  render() {
    return (
      <div>
        <h2 key="item1">{this.state.name}</h2>
        <input
          type="text"
          onChange={this.changeNameHandler}
          placeholder="Add task"
          value={this.state.todo}
        />
        <button onClick = {this.addTodo}>Submit</button>
        <ToDoList currentToDo={this.state.todos} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
