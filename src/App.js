import React, {Component} from 'react';
import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
import './App.css';

const task = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      task
    }
  }
  
  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState ({
      ...this.state,
      task: [...this.state.task, newTask]
    })
  }

  toggleTask = (taskID) => {
    this.setState({
      task: this.state.task.map(task => {
        if (taskID === task.id) {
          return {
            ...task, 
            completed: !task.completed
          }
        }
        return task
      })
    })
  }

  clearCompleted = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      task: this.state.task.filter((task) => !task.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <ToDoList
          toggleTask={this.toggleTask}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;

