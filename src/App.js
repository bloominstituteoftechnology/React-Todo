import React from 'react';

import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
    super();
    this.state = {
      task:"",
      id: [],
      taskRead:[],
      compeleted: false,
    };
  }

  addTask = event => {
      event.preventDefault();
      if (this.state.task) {
        this.setState({
          task: "",
          taskRead: [this.state.task,...this.state.taskRead],
        });
      }
    };

  handleInput = event => {
     this.setState({
       task: event.target.value,
     });
   };
  render() {
return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList task={this.state} />
        <TodoForm
          addTask={this.addTask}
          id={this.state.id}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
