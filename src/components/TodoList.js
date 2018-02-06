import React, { Component } from 'react';
import { render } from 'react-dom';

class TodoList extends Component {
  state = {
    todos: [
      {
        'id': 1,
        'title': 'This is a todo item',
        'completed': false,
      },
      {
        'id': 2,
        'title': 'This is a todo item 2',
        'completed': false,
      },
    ],
  };
  render() {
    return (
        <ul>
          {this.state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
          </ul>
      );
  };
}

export default TodoList;