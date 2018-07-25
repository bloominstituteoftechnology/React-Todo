import React from 'react';

const TodoList = props => {
    const {task}=props.task;
    return (
      <div>
         <p>{task}</p>
      </div>
    );
  };
export default TodoList;