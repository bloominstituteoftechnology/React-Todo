import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoList';

class App extends Component {

  // Constructor
  constructor(props) {
    super();
    this.state = {
      currentList: [
        { todo: 'Make todo list' }
      ]
    }
  }

  // Methods

  // Render
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.currentList} />
      </div>
    );
  }
}

export default App;
