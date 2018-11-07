import React from 'react';
import './Todo.css';

function Todo(props) {

    if (props.completed) {
      return (
        <div className='task completed' onClick={() => props.completedHandler(props.id)} >
          {props.task}
        </div>
      )
    } else {
      return (
        <div className='task' onClick={() => props.completedHandler(props.id)} >
          {props.task}
        </div>
      )
    }
  }
  
  export default Todo;