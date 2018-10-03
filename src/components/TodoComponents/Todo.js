import React from 'react';


function Todo(props) {
  return (
    <div class='task'>
      {props.task}
    </div>
  );
}

export default Todo;