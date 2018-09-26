import React from 'react';
import Todo from './components/TodoComponents/Todo.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: '',
      id: '',
      completed: ''
    }
  }
  keypressHandler = event => {
    if (event.keycode === 13) {
      this.setState({
        task: event.target.value,
        id: Date.now(),
        completed: false
      });
    }
    event.target.value = "";
  }

  // clickHandler = event => {
  //   //font style goes here
  // }

  render() {
    return (
      <div>
        <h2>React To Do List</h2>
        <Todo />
      </div>
    );
  }
}

export default App;
