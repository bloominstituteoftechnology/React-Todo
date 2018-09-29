import React from 'react';
import './Todo.css';
import Todo from './Todo';


class TodoList extends React.Component {

  render() {
    return (
      <ul className="todo-list">
        {this.props.todoList.map((todo) => {
                return ( <Todo key={todo.id} todo={todo} controller={this.props.controller} /> );
        })}
      </ul>
    );
  }
}

export default TodoList;
