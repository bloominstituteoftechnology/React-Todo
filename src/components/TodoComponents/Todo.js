import React from 'react';


function Todo(props) {
  return (
    <div className='task'onClick={() => props.completedHandler(props.id)} >
      {props.task}
    </div>
  )
}

export default Todo;