import React from 'react';
import Todo from './Todo.js';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodoList;
