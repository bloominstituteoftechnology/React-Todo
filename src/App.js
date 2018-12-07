import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  createNewTodo = (text /* string */) => {
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => {
      const todos = prevState.todos.slice();
      todos.push(newTodo);
      return { todos: todos };
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm createTodo={this.createNewTodo} />
      </div>
    );
  }
}

export default App;
