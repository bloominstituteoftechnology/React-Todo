import React from "react";

const Todo = props => {
  console.log(props);

  return (
    <div className="todo">
      <h3
        id={props.id}
        style={props.handleStyle}
        onClick={e => props.handleComplete(e)}
      >
        {props.todo.input}
        {props.handleComplete}
      </h3>
    </div>
  );
};

export default Todo;
