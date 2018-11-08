import React from 'react';

function Todo(props) {
  return (
    <li className={`checked-${props.todoItem.completed}`} 
      onClick={() => props.toggleItem(props.todoItem)}>{props.todoItem.task}</li>
  );
}

export default Todo;