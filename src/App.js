import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const tasks = [
  {
    task: "Vacation",
    id: 182,
    complete: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks,
    };
  }

  toggComplete = (taskId) => {
    // console.log("bk: index.js: App: toggComplete: taskId ", taskId);
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            complete: !task.complete,
          };
        }
        return task;
      }),
    });
  };

  addTask = (taskName) => {
    // console.log("bk: index.js: App: addTask: taskName: ", taskName);
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: taskName, complete: false, id: Date.now() },
      ],
    });
  };

  clearCompleted = () => {
    // console.log("bk: index.js: clearCompleted");
    this.setState({
      tasks: this.state.tasks.map((task) => {
        return { ...task, complete: !task.complete };
      }),
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>My ToDo App</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          toggComplete={this.toggComplete}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
