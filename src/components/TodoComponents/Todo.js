import React from 'react';


const Todo = (props) => {
  return(
    <h3 id={props.id} className='todo-item' onClick={props.handleClick}>{props.task}</h3>
  )
}

export default Todo; 
