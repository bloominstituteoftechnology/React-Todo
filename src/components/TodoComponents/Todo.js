import React from "react";
const Todo = props => {
  return (
    <p className='todo'>
      {props.data.task}</p>
  )
}
export default Todo;