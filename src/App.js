import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'


const task = [
  {
    id:12,
    name: 'go to work',
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task:task
    };
  }

  addTask = (taskName, e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }
    this.setState({
      ...this.state,
      task: [...this.state.task, newTask]
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo: APP</h2>
        <div>
        <TodoList task={this.state.task} />
        </div>
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
