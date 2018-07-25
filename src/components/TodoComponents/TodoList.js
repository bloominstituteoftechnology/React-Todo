import React from 'react';

const TodoList = props => {
    const {task}=props.taskProp;
    return (
         <p>{task}</p>
    );
  };
export default TodoList;