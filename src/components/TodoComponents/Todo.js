import React from "react";

const Todo = props => {

  let taskStyleCompleted = {}

  if (props.newList.completed === false){
    taskStyleCompleted = {
      margin: 0,
      cursor: 'pointer',
      border: '1px solid black',
      maxWidth: '360px',
      textAlign: 'center',
      backgroundColor: 'green',
      fontSize: '24px',
      padding: '10px 0',
      textDecoration: 'none'
    }
  } else {
    taskStyleCompleted = {
      margin: 0,
      cursor: 'pointer',
      border: '1px solid black',
      maxWidth: '360px',
      textAlign: 'center',
      backgroundColor: 'red',
      fontSize: '24px',
      padding: '10px 0',
      textDecoration: 'line-through'
    }
  }
  return <p
    style={taskStyleCompleted}
    onClick={() => props.toggleTaskComplete(props.objectnumber)}
    
    >{props.newList.task}</p>
};

export default Todo;