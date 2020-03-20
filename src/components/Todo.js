import React from "react";

const Todo = props => {
  return (
    <div className="todoCard">
      <h3
        id={props.id}
        style={props.style}
        onClick={e => props.handleComplete(e)}
      >
        {props.todo.input}
      </h3>
    </div>
  );
};

export default Todo;
