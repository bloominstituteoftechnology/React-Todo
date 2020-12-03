import React from "react";
import "./components/Todo.css"

import TodoList from "./components/TodoList";
import data from "./data";
import TodoForm from "./components/TodoForm";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data,
    };
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      data: [...this.state.data, newTask],
    });
  };

  toggleTask = (itemId) => {
    this.setState({
      data: this.state.data.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        </div>
        <TodoList todo={this.state.data} toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;
