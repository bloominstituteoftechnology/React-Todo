import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
  }
  render() {
    return (
      <div>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
