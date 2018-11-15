import React from 'react';
import './components/TodoComponents/Todo.css';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div className="todo-app-wrapper">
        <Todo />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
