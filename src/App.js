import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// Data //
const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
      task: ""
    };
  }

  // Clear Form //
  clearForm = () => {
    let newArr = this.state.todos.filter(
      item => {
        return item.completed !== true;
      }
    );
    this.setState({ todos: newArr });
  };

  // Toggle Completed //
  toggleCompleted = clickedId => {
    console.log(this.state);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === clickedId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  // Add New Item //
  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };

  render() {
    return (
      <div>
        <TodoForm
          addItem={this.addItem}
          clearForm={this.clearForm}
        />
        <TodoList
          todos={this.state.todos}
          toggleCompleted={
            this.toggleCompleted
          }
        />
      </div>
    );
  }
}

export default App;
