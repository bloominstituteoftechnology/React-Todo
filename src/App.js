import React from 'react';
import reactDOM from "react-dom";

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css";

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      data
    };
  }

  addTask = (e, taskName) => {
    e.preventDefault();
    const existing = this.state.data.filter(
      item => item.task === taskName
    );
    if (existing.length === 0) {
      const newTask = {
        task: taskName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        data: [...this.state.data, newTask]
      });
    }
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      data: this.state.data.filter(task => !task.completed)
    })
  }

  toggleTask = taskId => {
    this.setState({
      data: this.state.data.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed};
        }
        return task;
      })
    })
  }
  
  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
        <h2 >My Checklist!</h2>
        <TodoForm  addTask={this.addTask} />
        </div>
        <TodoList
          task={this.state.data}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
