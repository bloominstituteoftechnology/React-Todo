import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { todos: [] };
  }

  addNewItem = (task) => {
    const obj = {
      task,
      id: Date(),
      completed: false,
    };
    console.log(obj);
    this.setState({
      todos: [...this.state.todos, obj],
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList data={this.state.todos} />
      </div>
    );
  }
}

export default App;
