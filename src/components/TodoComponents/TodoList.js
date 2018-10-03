import React from 'react';
import Todo from './todo';

const TodoList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <Todo key={index} item={item} />
    ))}
  </ul>
);

export default TodoList;
