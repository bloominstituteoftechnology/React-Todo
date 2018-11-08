import React from "react";

const Todo = props => {
  return <p
    onClick={() => props.toggleTaskComplete(props.newList.id)}
    className={`todo ${props.newList.completed}`}
    
    >{props.newList.task}</p>
};

export default Todo;