import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: '',
      id: '',
      completed: false,
    };
  }

  // Sets what is currently being input to task
  handleInput = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  handleClick = (event) => {
    this.setState({
      task: event.target.value,
      id: this.state.id + 1,
    });
  };

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
