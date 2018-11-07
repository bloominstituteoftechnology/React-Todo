import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends Component {

  // Constructor
  constructor(props) {
    super();
    this.state = {
      currentList: [
        { todo: 'Make todo list' },
        { todo: 'add items' }
      ],
      inputValue: ''
    }
  }

  // Methods
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addItem = e => {
    e.preventDefault();
    this.setState({
      currentList: [...this.state.currentList, { todo: this.state.inputValue }],
      inputValue: ''
    });
  }

  // Render
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.currentList} />
        <TodoForm
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
