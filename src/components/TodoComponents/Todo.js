import React from "react";

const Todo = props => {

    let verboseClassName = "todo";
    if (props.todo.completed) {
      verboseClassName = verboseClassName + " completed";
    }
  
    const handleClick = () => {
      props.toggleCompleted(props.todo.id);
    };
  
    return (
      <div onClick={handleClick} className={verboseClassName}>
        <p>{props.todo.todo}</p>
      </div>
    );
  };
  
  export default Todo;