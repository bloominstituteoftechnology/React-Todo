import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      toDoData: [
        {
          task: 'Make dinner',
          id: 1,
          completed: false
        },
        {
          task: 'Do laundry',
          id: 2,
          completed: false
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo List</h1>
        <TodoList data={this.state} />
      </div>
    );
  }
}

export default App;
