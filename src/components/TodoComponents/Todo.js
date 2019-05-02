import React from "react";
const Todo = props => {
  return (
    <p className='todo'>
      {props.todo.task}</p>
  )
}
export default Todo;