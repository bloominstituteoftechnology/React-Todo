import React from 'react';
import Todo from './Todo';

const TodoList = ({ list }) => {
  return (
    <div>
      {list.map(el =>
        <Todo
          todo={el}
          key={el.id} />)}
    </div>
  );
}

export default TodoList;
