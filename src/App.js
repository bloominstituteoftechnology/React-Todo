import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';


const ToDoItems = [
  { task: 'ToDo List', id: 1, completed: false},
  { task: 'cook dinner', id: 2, completed: false },
  { task: 'clean kitchen', id: 3, completed: false },
  { task: 'go to the gym', id: 4, completed: false }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App starting!</h2>
      </div>
    );
  }
}

export default App;
