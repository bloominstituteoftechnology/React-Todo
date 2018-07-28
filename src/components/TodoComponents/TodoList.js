import React from 'react';
import Todo from './Todo.js';
const TodoList = props => {
    return (
         props.taskProp.map(task=><Todo taskProp={task} key={task.id} updateTaskStatus={props.updateTaskStatus}/>)
    );
  };
export default TodoList;