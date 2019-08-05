import React, { Component } from 'react';

import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div className="todos-list">
        {this.props.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              toggleDone={this.props.toggleDone}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
