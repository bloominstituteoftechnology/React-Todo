import React from 'react';

function Todo(props) {
  return (
    <div className="todo">
      {props.todo.task}
    </div>
  );
};

export default Todo;