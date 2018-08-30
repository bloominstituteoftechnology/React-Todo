import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: ''
    };
  }

  addTodo = event => {
    event.preventDefault(); 
    if (this.state.inputText) {
      this.setState({
        todos: [...this.state.todos, 
                {task: this.state.inputText, 
                id: Date.now(), 
                completed: false}], 
        inputText: ''
      });
    }
  }

  handleInput = event => {
    this.setState({ inputText: event.target.value});
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm inputText={this.state.inputText} addTodo={this.addTodo} handleInput={this.handleInput} />
      </div>
    );
  }
} // End of App

export default App;
