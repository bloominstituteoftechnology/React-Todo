import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const toDos = [
  {
    taskName: 'Clean Your Room',
    id: 123,
    completed: false
  },
  {
    taskName: 'Brush Your Teeth',
    id: 124,
    completed: false
  },
  {
    taskName: 'Fold Clothes',
    id: 1235,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDos
    }
  }

  // handleToggle = (taskID) => {
  //   const newToDos = this.state.toDos.map( e => {

  //   })
  // }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList toDos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
