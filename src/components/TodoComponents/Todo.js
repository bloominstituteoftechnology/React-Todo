import React from 'react';


function Todo(props) {
  console.log('Todo props: ' + props.id);

  return (
    <div className='task'onClick={() => props.completedHandler(props.id)} >
      {props.task}
    </div>
  )
}

export default Todo;