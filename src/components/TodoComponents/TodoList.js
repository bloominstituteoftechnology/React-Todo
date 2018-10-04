import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList }) => (
  <ul>
    {todoList.map((todo, index) => (
      <Todo key={index} todo={todo} />
    ))}
  </ul>
);

export default TodoList;
