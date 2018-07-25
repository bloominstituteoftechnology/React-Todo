// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = ({ list }) => (
  <ul className="Todo__list text-primary-color">
    <div>{list.map(item => <Todo key={item.id} {...item} />)}</div>
  </ul>
);

export default TodoList;
