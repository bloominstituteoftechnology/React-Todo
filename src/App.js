import React, { Component } from "react";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "To Do List"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <TodoList />
      </div>
    )
  }
}

export default App;
