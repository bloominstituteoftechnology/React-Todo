import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import data from './data';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: data,
    };
  }

  addTodo = (todoName) => {
    const todo = {
      name: todoName,
      id: this.state.tasks.length,
      completed: false,
    };

    const newTasks = [...this.state.tasks, todo];

    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
