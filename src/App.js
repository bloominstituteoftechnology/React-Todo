import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  state = {
    todos: [
      {
        task: 'Tasks',
        completed: false
      },
    ]
  }

  addTask = (todo) => {
    const { todos } = this.state;
    todos.push({
      task: todo,
      completed: false
    });

    this.setState({ todos: todos });
    console.log(this.state);
  };

  render() {
    return (
      <TodoList
        todo={this.state.todos}
        clicked={this.addTask} />
    );
  }
}

export default App;
