import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['Test Todo'],
      newTodo: '',
    }
  }

  render() {
    return (
      <div>
      {this.state.todos.map((todo, index) => {
        return(
          <Todo key={index} todo={todo} />
        );
      })}
      </div>
    );
  }
}