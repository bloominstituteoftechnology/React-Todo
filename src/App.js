import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoArray = [
  {
      task: 'Drop Drycleaning',
      id: 1528817077286,
      completed: false
  },
  {
      task: 'Pack Suitcase',
      id: Date.now(),
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
        <h3><TodoList todos={this.state.todos} /></h3>
        <TodoForm />
      </div>
    );
  }
}

export default App;
