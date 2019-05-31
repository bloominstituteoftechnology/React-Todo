import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {

  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm /> 
        <TodoList todoItems={this.state.todos} />
      </div>
    );
  }
}

const list = [
  {
      task: 'get away',
      id: 123213,
      completed: false
  },
  {
      task: 'get a life',
      id: 12444413,
      completed: false
  },
  {
      task: 'get along',
      id: 9,
      completed: false
  }
]

export default App;
