import React from 'react';
import Todo from './Todo.js';
import './Todo.css';

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
