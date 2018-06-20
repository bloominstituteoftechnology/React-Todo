import React from 'react';

const Todo = (props) => {
  return (
    <div>
      {props.singleTodo.task}
      {/* {props.singleTodo.id} */}
    </div>
  );
};

export default Todo;
