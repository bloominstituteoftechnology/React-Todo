/*
<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
All of your application data will be stored here on <App />.
All of your handler functions should live here on <App />.
 */

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Sample Text 1',
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.

  constructor() {
    super();
    // initialize the state object
    this.state = {
      todoList: todos
    };

    // this.toggleItem = this.toggleItem.bind(this)
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = (taskName) => {
    const newTodo = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todoList} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
