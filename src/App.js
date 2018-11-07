import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const testTodos = [
  {todoInfo: 'make this work'},
  {todoInfo: 'drink some water'},
  {todoInfo: 'go to sleep'}
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: testTodos,
      todoText: '',
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm todoText={this.state.todoText}/>
      </div>
    );
  }
}

export default App;
