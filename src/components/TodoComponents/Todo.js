import React from 'react';

const Todo = props => {
  const { task } = props.todos;

  return (
    <div>
      <h4> { task } </h4>
    </div>
  );
};

export default Todo;