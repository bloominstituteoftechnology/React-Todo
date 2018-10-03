import React from 'react';

const TodoList = (props) => {

  return (
    <div>
    {props.todoArray.map(item => {
      return <h1>{item.task}</h1>
    })}
    </div>
  )
}

export default TodoList;

