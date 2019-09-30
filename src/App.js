import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { tsArrayType } from '@babel/types';

import './components/TodoComponents/Todo.css'

const Tasks = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: Tasks,
    }
  }

  toggleComplete = id => {
    this.setState({
      task: this.state.task.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    // console.log(this);
    this.setState({
      task: [...this.state.task, newTask]
    });
  };

  clearComplete = () => {
    this.setState({
      task: this.state.task.filter(task => !task.completed)
    })
  }
  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.task}
          toggleComplete={this.toggleComplete}
          clearComplete={this.clearComplete} />
      </div>
    );
  }
}

export default App;
