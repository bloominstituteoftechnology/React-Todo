import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm.js';
import List from './components/TodoComponents/TodoList.js';
import Task from './components/TodoComponents/Todo.js';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      task: List

    }
    this.handleUpdateTasks = this.handleUpdateTasks.bind(this)
  }

  handleUpdateTasks = () => {
    // const currentTask = this.state.task.slice();
    // currentTask.push({
    console.log('hi');
    // })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to the TODO APP!</h2>

        {this.state.task.map(task => (
          <Task displayTask = {task} />
        ))}

        <TodoForm />
      </div>

    )
  }
}

export default App;
