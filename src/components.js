
import React, { Component } from "react";
import { render } from "react-dom";
import TodoList from "./TodoList";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      tasks: ["Wash Car", "Pay Bills", "Walk Doggo", "Clean Kitchen"]
    };
  }

  handleAddTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitTodo = () => {
    const { tasks } = this.state;
    tasks.push(this.state.newTodo);
    this.setState({ tasks, newTodo: "" });
  };

  render() {
    return (
      <div style={styles}>
        <h2>This Is My To Do List</h2>
        <TodoList {...this.state} />
        <input
          type="text"
          name="newTasks"
          value={this.state.newTodo}
          placeholder="add tasks"
          onChange={this.handleAddTodo}
        />
        <button onClick={this.handleSubmitTodo}>Add Todo</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));