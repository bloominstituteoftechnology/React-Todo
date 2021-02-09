import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      task: '',
      id: Date.now(),
      completed: false,
    }
  }

  onChange = event => {
    this.setState({ task: event.target.value })
  }

  addTask = () => this.state.task;
  

  clearCompleted = event => {

  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input placeholder='Write a To-Do!' onChange={this.onChange}/>
        <button onClick={this.addTask}>Add Task</button>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
