import React, { Component } from 'react';
import TodoList from './Todolist';

// const App = () => (
//   <div>
//     <h2>Todo App</h2>

//   </div>
// );

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{todo: 'mow the lawn', completed: false},
      { todo: 'buy groceries', completed: false}]
    };
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
