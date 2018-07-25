import React from 'react';
import Todo from './components/TodoComponents/Todo.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      task: ''
      }
    }
  handleUpdateState(){
    
  };
  handleInputChange = event => {
    this.setState({task: event.target.value});
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoForm />

      </div>
    );
  }
}

export default App;
