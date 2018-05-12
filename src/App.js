import React, { Component } from "react";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: "Note: When an item is added to the todo list you can click on it to confirm that it was completed"
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <TodoList />
      </div>
    )
  }
}

export default App;
