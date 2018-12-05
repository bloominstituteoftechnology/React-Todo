import React from 'react';
// import TodoForm from './components/TodoComponents/TodoForm.js';
import List from './components/TodoComponents/TodoList.js';
import Task from './components/TodoComponents/Todo.js';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      task: List

    }
  }

  handleUpdateTasks = () => {
    // const currentTask = this.state.task.slice();
    // currentTask.push({
    // })
    // console.log('hi')

  }


  handleInputChange = event => {
    console.log(event.target.value)
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

        <input value = { this.state.value } onChange = {this.handleInputChange}type="text"></input>

        <button onClick={this.handleUpdateTasks}>Add To Do</button>
        <button>Clear Finished</button>
      </div>

    )
  }
}

export default App;
