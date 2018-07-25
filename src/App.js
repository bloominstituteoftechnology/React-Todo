import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
