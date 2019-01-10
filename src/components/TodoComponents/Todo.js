import React from 'react';

function Todo(props) {
    console.log(props)
  return (
        <p
            style = {props.todo.complete ? {textDecoration: "line-through"}: null} 
            // className={props.todo.complete ? 'complete' : null}
            onClick={()=> props.toggleComplete(props.index)} >
            {props.todo.task}
        </p>
    );
}

export default Todo;