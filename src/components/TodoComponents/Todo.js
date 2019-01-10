import React from "react";

function Todo(props) {
  return (
      <div>
        <div 
            className={props.todo.completed ? 'complete' : null}
            onClick={() => props.toggleCompleted(props.todo.id)}>
            </div>
        {props.todo.task}
      </div>
  ); 
  
}

export default Todo;