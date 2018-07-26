import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const todoArray = [
  {
      task: 'Drop Drycleaning',
      id: 1528817077286,
      completed: false
  },
  {
      task: 'Pack Suitcase',
      id: 1528817077289,
      completed: false
  },
  {
      task: 'Book Hotel',
      id: 1528817077285,
      completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todoArray
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App! {Date.now()} </h2>
        <h3><TodoList todos={this.state.todos} /></h3>
      </div>
    );
  }
}

export default App;
