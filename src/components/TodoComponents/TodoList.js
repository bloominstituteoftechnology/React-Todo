import React from 'react';
import './Todo.css';

import Todo from './Todo';

class TodoList extends React.Component{
  render() {
    // console.log(this.props);
    if (this.props.todoList) {
      return (
        <ul className="todo-list">
          {
            this.props.todoList.filter(
              todo => todo.task.toLowerCase().includes(this.props.filterText.toLowerCase())
            ).map(
              (todo, i) => <Todo
                category = {this.props.category}
                key={todo.id + i}
                todo={todo}
                handleClick={ (e, cat, id) => this.props.handleClick(e, cat, id) }
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