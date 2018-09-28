import React from 'react';
import './Todo.css';
import Todo from './Todo';


class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.todoList = props.todoList;
        this.controller = props.controller;
    }

  render() {
    return (
      <ul className="todo-list">
        {this.todoList.map((todo) => {
                return ( <Todo key={todo.id} todo={todo} controller={this.controller} /> );
        })}
      </ul>
    );
  }
}

export default TodoList;
