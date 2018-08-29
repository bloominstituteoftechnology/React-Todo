import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    //Need to add task, field, and completed.
    this.state = {
      todos: [],
      id: Date.now(),
      completed: false,
      inputText: ''
    };
  }

   addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
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
      });
    }
  };

   clearTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        id: Date.now(),
        todos: [],
        inputText: ''
      });
    }
  };
   handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
