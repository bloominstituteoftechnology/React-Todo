import React from "react";

import "./App.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const arrayOfTasks = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: arrayOfTasks,
      todo: ""
    };
  }

  handleUpdateState = event => {
    event.preventDefault();
    const todoData = this.state.todoData.slice();
    // clone our state todoData array.
    todoData.push({
      task: this.state.todo,
      id: Date.now(),
      completed: false
    });
    this.setState({ todoData, todo: "" });
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ [event.target.name]: event.target.value });
  };

  handleInputEnter = event => {
    event.preventDefault();
    // if keys is equal to 13 (enter) update value
    if (event.keyCode === 13) {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  // toggle completed todos
  toggleCompletedTasks = id => {
    let todoData = this.state.todoData.slice();
    console.log("task.id", todoData[0].id)
    console.log("id", id)
    todoData = todoData.map(task => {
      // if the todoData element id
      // equals the id of the one we click
      // we change to the opposite of what 
      // it is, true to false, f to t
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    this.setState({ todoData });
  };

  clearCompletedTasks = event => {
    event.preventDefault();
    let todoData = this.state.todoData.slice();
    todoData = todoData.filter(task => !task.completed);
    this.setState({ todoData });
  };
  render() {
    return (
      <div className="app-wrapper">
        <h1 className="img-underline">Todo List</h1>
        <TodoList
          handleToggleComplete={this.toggleCompletedTasks}
          todoArray={this.state.todoData}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.handleInputChange}
          handleAddTodo={this.handleUpdateState}
          handleClearTodos={this.clearCompletedTasks}
        />
      </div>
    );
  }
}

export default App;
