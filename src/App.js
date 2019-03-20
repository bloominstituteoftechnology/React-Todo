import React from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div class="body">
        <h1>Todo List</h1>
        <div class="notepad">
          <div class="redline"></div>
          <TodoList />
        <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;
