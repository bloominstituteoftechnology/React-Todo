import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: [],
      inputText: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todoItems: [...this.state.todoItems, {task: this.state.inputText, id: Date.now(), completed: false}],
        inputText: ''
      });
    }
  }

  clearTodo = event => {
    event.preventDefault();
    // some stuff
  }

  toggleTodo = event => {
    console.log(event.target);
    console.log(this.state.todoItems);
    // event.target.classList.toggle='strike-through';
    this.setState({
      // event.target.
    });
  }

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div>
          <h2>ToDo List</h2>
          <TodoList 
            todoItems={this.state.todoItems}
            toggleTodo={this.toggleTodo}
           />
          <TodoForm
            addTodo={this.addTodo}
            inputText={this.state.inputText}
            handleInput={this.handleInput}
           />
      </div>
    );
  }
}

export default App;
