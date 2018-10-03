import React from 'react';

const TodoItem = (props) => {
  return (
    <div>
      <li>{props.todoItem}</li>
    </div>
  );
};

export default TodoItem;
