import React from 'react';
import './Todo.css';

import Todo from './Todo';

const TodoList = props => {

  if (props.todoList) {
    return (
      <ul className="todo-list">
        {
          props.todoList.filter(
            todo => todo.task.toLowerCase().includes(props.filterText.toLowerCase())
          ).map(
            todo => <Todo key={todo.id} todo={todo}/>
          )
        }
      </ul>
    );
  } else {
    return (
      <ul className="todo-list">Empty</ul>
    )
  }
};

export default TodoList;