import React from 'react';
import { Container } from '@material-ui/core';


import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

// Tasks array
const tasksArray = [
  { task: 'Water Plants', id: 56709, completed: false }, { task: 'Feed Rabbit', id: 90765, completed: false }, { task: 'File Taxes', id: 450, completed: true }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasksArray

    }
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompleted = () => {
    console.log('clearCompleted');
    this.setState({
      tasks: this.state.tasks.filter(entry => !entry.completed)
    })
  }

  toggleCompleted = id => {
    this.setState({
      tasks: this.state.tasks.map(entry => {
        if (entry.id === id) {
          return {
            ...entry,
            completed: !entry.completed
          }
        } else {
          return entry;
        }
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <Container
        maxWidth='sm'
      >
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} />
      </Container>
    );
  }
}

export default App;
