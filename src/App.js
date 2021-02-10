import React from "react";

import { v4 as uuidv4 } from "uuid";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const list = [
  {
    task: "Go to the Gym",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Sleep 8 hours",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Spend lots of quality time with the girls",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Enjoy Life",
    id: uuidv4(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  toggleDone = (taskId) => {
    const newTaskList = this.state.list.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });
    this.setState({
      ...this.state,
      list: newTaskList,
    });
  };

  addTodo = (todoTask, e) => {
    e.preventDefault();
    const newTask = {
      task: todoTask,
      id: uuidv4(),
      completed: false,
    };
    this.setState({
      ...this.state,
      list: [...this.state.list, newTask],
    });
  };

  clearPurchased = () => {
    console.log("clearing complete tasks");
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          clearTodo={this.Todo}
          toggleDone={this.toggleDone}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
