import React, { Component } from 'react';
import TodoListMain from './todoListMain';
import ShowTodo from './showTodo';

class App extends Component {
  render() {
    return (
      <div>
        <TodoListMain />
        <ShowTodo />
      </div>
    );

  }
}

export default App;
