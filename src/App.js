import React from "react";

import TodoForm from "./components/components/TodoForm";
import TodoList from "./components/components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: "",
      id: Date.now(),
      completed: false
    };
  }

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            done: !task.done
          };
        }
        return task;
      })
    });
  };

  clearDone = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.done;
      })
    });
  };

  addTask = taskName => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          tasks: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <>
            <h2>Welcome to your Todo App!</h2>
          </>
          <>
            <TodoForm addTask={this.addTask} />
          </>
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;