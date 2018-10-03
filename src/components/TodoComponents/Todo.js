import React from 'react';


function Todo(props) {
  return (
    <div className='task'>
      {props.task}
    </div>
  );
}

export default Todo;