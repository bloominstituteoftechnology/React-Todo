import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDo from './components/TodoComponents/Todo';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <ToDoList />
        </div>
        <div>
          <ToDo />
        </div>
        <div>
          <ToDoForm />
        </div>
      </div>
    );
  }
}

export default App;
