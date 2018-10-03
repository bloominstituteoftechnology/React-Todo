import React from 'react';


const Todo = (props) => {
    let classes = 'todo-item';
    if (props.completed) {
        classes += ' done';
    }
    if (props.hidden) {
      classes += ' hidden'; 
    }
  return(
    <h3 id={props.id} className={classes} onClick={props.handleClick}>{props.task}</h3>
  )

}

export default Todo;
