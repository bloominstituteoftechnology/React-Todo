import React from 'react';

const TodoList = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <h2>{task.name}</h2>
      ))}
    </div>
  );
};

export default TodoList;
