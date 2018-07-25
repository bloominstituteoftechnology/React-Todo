// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = ({ list, toggler, filter }) => {
  if (filter !== 'all') {
    list = list.filter(todo => {
      return filter === 'active' ? !todo.completed : todo.completed;
    });
  }
  return (
    <ul className="Todo__list text-primary-color">
      <div>
        {list.map(item => (
          <Todo key={item.id} {...item} onClick={() => toggler(item.id)} />
        ))}
      </div>
    </ul>
  );
};

export default TodoList;
