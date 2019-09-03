
import React from "react";
import './Todo.css'
const Todo = props => {
  let className = "task ";
  console.log(props)
  const handleCompletedToggle = () => {
    props.completedToggle(props.item);
    
  }
  if (props.item.completed) {
    className += "task-completed"
  }
  
  return (
    <>
          <p className={className} onClick={handleCompletedToggle}>{props.item.task}</p>
    </>
  );
};

export default Todo;
