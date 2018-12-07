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

  createNewTodo = (text) => {
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

  deleteTodo = () => {

  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          createTodo={this.createNewTodo}
          deleteTodo={this.deleteTodo}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
