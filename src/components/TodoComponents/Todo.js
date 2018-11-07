import React from "react";

const Todo = props => {
  return <p
    style={{
      margin: 0,
      cursor: 'pointer',
      border: '1px solid black',
      maxWidth: '360px',
      textAlign: 'center',
      backgroundColor: 'green',
      fontSize: '24px',
      padding: '10px 0'
    }}
    onClick={props.toggleTaskComplete}
    
    >{props.newList.task}</p>;
};

export default Todo;