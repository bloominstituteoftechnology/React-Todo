import React from 'react';

const Todo = props => {
  return (
    <div className="todo">
      {props.todo.task}
    </div>
  );
};

export default Todo;