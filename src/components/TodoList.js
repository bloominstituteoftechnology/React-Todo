// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todoList.length > 0 ? (
          this.props.todoList.map((todo) => (
            <Todo
              key={todo.todo}
              toggleTodo={this.props.toggleTodo}
              todo={todo}
            />
          ))
        ) : (
          <div>
            <p>There is nothing to do right now. Start adding todos!</p>
          </div>
        )}
      </div>
    );
  }
}
