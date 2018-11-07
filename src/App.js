import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: [],
      id: Date.now(),
      completed: false,
      inputText: ''
    };
  } 

  addToDo = event => {
    event.preventDefault();
    if(this.state.inputText) {
      this.setState({
        id: Date.now(),
        todos: [
          ...this.state.todos,
          {
            inputText: this.state.inputText,
            id: this.state.id,
            completed: this.state.completed
          }
        ],
        inputText: ''
      }),
    }
  };

  clearCompleted = event => {
    event.preventDefault();
    if(this.state.inputText) {
      this.setState({
        id: Date.now(),
        todo: [],
        inputText: ''
      });
    }
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
