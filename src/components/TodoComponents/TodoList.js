import React from 'react';
import Todo from './Todo.js';
const TodoList = props => {
    return (
         props.taskProp.map(task=><Todo taskProp={task}/>)
    );
  };
export default TodoList;