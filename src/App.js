import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./components/Todo.css";

const toDo = [
  {
    task: "Make ToDo List",
    id: 1,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { toDo };
  }

  addToDo = (e, task) => {
    e.preventDefault();
    const listCopy = [...this.state];
    const findLastId = listCopy.pop();
    const newTask = {
      name: task,
      id: findLastId.id + 1,
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
        <h2>Todo App</h2>
        <TodoForm addToDo={this.state.addToDo} />
        <div className="app__Container">
          <TodoList
            toDo={this.state.toDo}
            toggleCompleted={this.state.toggleCompleted}
            clearCompletedTasks={this.state.clearCompletedTasks}
          />
        </div>
      </div>
    );
  }
}

export default App;
