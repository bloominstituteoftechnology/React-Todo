import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      // Setup base list of todo items. Needs timestamp id, task & completed flag.
      todoList: [
        { id: 1528817077286, task: "Organize Garage", completed: false },
        { id: 1528817084358, task: "Bake Cookies", completed: true },
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>ToDo List</h2>
        <TodoList todoArray={this.state.todoList} />
      </div>
    );
  }
}

export default App;
