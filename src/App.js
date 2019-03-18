import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Be a Lumberjack",
          id: 1528817078886,
          completed: false
        },
        {
          task: "Cook Steak",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Chop Lumber",
          id: 1528817084358,
          completed: false
        },
        {
          task: "Wear Flannel",
          id: 1528817095747,
          completed: false
        }
      ],
      todo: ""
    };
  }

  toggleComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  // TODO FORM FUNCTIONS
  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({
      task: this.state.todo,
      completed: false,
      id: Date.now()
    });
    this.setState({ todos, todo: "" });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoList
          todos={this.state.todos}
          handleToggleComplete={this.toggleComplete}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
