import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/ToDoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div className='app-container'>
        <h1 className='header'>Todo List: MVP</h1>
        <TodoList />
        <ToDoForm />
      </div>
    );
  }
}

export default App;

