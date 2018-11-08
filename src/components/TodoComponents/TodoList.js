import React from 'react';
import './Todo.css';

import Todo from './Todo';

class TodoList extends React.Component{
  render() {
    if (this.props.todoList) {
      return (
        <ul className="todo-list">
          {
            this.props.todoList.filter(
              todo => todo.task.toLowerCase().includes(this.props.filterText.toLowerCase())
            ).map(
              (todo, i) => <Todo
                key={todo.id + i}
                todo={todo}
                handleClick={ (e, id) => this.props.handleClick(e, id) }
              />
            )
          }
        </ul>
      );
    } else {
      return (
        <ul className="todo-list">Empty</ul>
      )
    }
  }
};

export default TodoList;