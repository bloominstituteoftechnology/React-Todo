import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";


const tasks = [
  {
    task: "Task 1",
    id: 213,
    completed: false
  },
  {
    task: "Task 2",
    id: 123213,
    completed: false
  },
  {
    task: "Task 3",
    id: 1232132,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {tasks};
  };

  handleToggle = (taskId) => {
    const newTasks = this.state.tasks.map(item => {
      if (taskId === item.id) {
        return ({
          ...item,
          completed: !item.completed
        });
      }
      return(item);
    })
    this.setState({tasks: newTasks});
  };

  handleAdd = (task) => {
    this.setState({
      tasks: [...this.state.tasks, {task: task, id: Date.now(), completed: false}] 
    })
  };

  handleCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => ( !item.completed ))
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App!</h1>
        </div>
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList tasks={this.state.tasks} handleToggle={this.handleToggle} handleCompleted = {this.handleCompleted} />
      </div>
    );
  }
}

export default App;
