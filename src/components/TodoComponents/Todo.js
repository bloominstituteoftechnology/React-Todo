import React from 'react';
import { EventEmitter } from '../../utils.js';

import './Todo.css';

const Todo = ({ todo }) => {
  const handleClick = () => {
    EventEmitter.dispatch('toggleTodo', todo.id);
  };

  return (
    <li className="todo-item" onClick={handleClick} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.task}
    </li>
  );
};

export default Todo;
