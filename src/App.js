import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./components/Todo.css";

const toDo = [
  {
    task: "Make ToDo List",
    id: 1,
    completed: true,
  },
  {
    task: "Fix ToDo List",
    id: 2,
    completed: true,
  },
  {
    task: "Style ToDo List",
    id: 2,
    completed: true,
  },
  {
    task: "Eat Food",
    id: 2,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { toDo };
    console.log("todo", toDo);
  }

  addToDo = (e, todo) => {
    e.preventDefault();
    const newTask = {
      task: todo,
      id: this.state.toDo[this.state.toDo.length - 1].id + 1,
      completed: false,
    };
    this.setState({
      ...this.state,
      toDo: [...this.state.toDo, newTask],
    });
  };

  toggleCompleted = (id) => {
    this.setState({
      ...this.state,
      toDo: this.state.toDo.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  clearCompletedTasks = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      toDo: this.state.toDo.filter((task) => !task.completed),
    });
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Todo App</h2>
          <TodoForm addToDo={this.addToDo} />
        </div>
        <div className="app__Container">
          <TodoList
            toDo={this.state.toDo}
            toggleCompleted={this.toggleCompleted}
            clearCompletedTasks={this.clearCompletedTasks}
          />
        </div>
      </div>
    );
  }
}

export default App;
