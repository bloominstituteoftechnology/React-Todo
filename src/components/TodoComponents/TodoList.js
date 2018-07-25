// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ list }) => (
  <ul className="Todo__list">
    {list.map(item => <Todo key={item.id} {...item} />)}
  </ul>
);

export default TodoList;
