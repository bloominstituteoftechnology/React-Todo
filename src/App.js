import React from 'react';
import ToDoList from '../src/components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  constructor() {
    super();

    this.state = {
      todos: [
        { id: 1, completed: true, task: "shop" },
        { id: 2, completed: false, task: "eat" },
        { id: 3, completed: true, task: "bathe" },
        { id: 4, completed: false, task: "dance" }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList todolist={this.state.todos}/>

      </div>
    );
  }
}

export default App;
