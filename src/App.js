import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

// Tasks array
const tasksArray = [
  { task: 'Water Plants', id: 56709, completed: false }, { task: 'Feed Rabbit', id: 90765, completed: false }
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
      tasks: [...tasksArray, newTask]
    })
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(entry => !entry.completed)
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
        <TodoList tasks={this.state.tasks} />
      </>
    );
  }
}

export default App;
