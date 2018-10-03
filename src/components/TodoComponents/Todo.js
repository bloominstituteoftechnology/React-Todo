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
    <div className='line'>
      <div className='wire one'/>
      <div className='wire two'/>
      <div className='divider' />
    <h3 id={props.id} className={classes} onClick={props.handleClick}>{props.task}</h3>
  </div>
  )

}

export default Todo;
