import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";

const tasks = [
  { task: "Learn React", id: "1", completed: false },
  { task: "Use State", id: "2", completed: false },
  { task: "Clean house", id: "3", completed: false }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      tasks
    };
  }

  addTask = taskName => {
    const newTodo = { task: taskName, id: Date.now(), completed: false };
    this.setState({ tasks: [...this.state.tasks, newTodo] });
  };

  clearDone = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  toggleTask = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        <TodoForm
          addTask={this.addTask}
          updateTodo={this.updateTodo}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
