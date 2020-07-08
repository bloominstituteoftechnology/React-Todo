import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

//add styling
class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "",
          id: "",
          completed: false,
        },
      ]
    }
  }

  addTodo = todoName => {
    this.setState({
      todos: [
        // want to keep what we already have
        ...this.state.todos,
        // object we're adding
        {
          task: todoName,
          id: Date.now(),
          completed: false,
        }
      ]
    });
  };

  toggleCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todos={this.state.todos}
          // had a bug bc we had this.state.toggleCompleted
          toggleCompleted={this.toggleCompleted}
          // clearCompleted={this.clearCompleted}
        />
        <TodoForm 
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
