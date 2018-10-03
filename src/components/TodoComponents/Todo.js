import React from 'react';

const Todo = (props) => {
  return (
    <div>      
      <ul>
        <li>{props.todo.task}</li>
      </ul>
    </div>
  );
};

export default Todo;