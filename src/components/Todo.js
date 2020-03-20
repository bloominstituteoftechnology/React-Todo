import React from "react";

const Todo = props => {
  console.log(props.className);
  return (
    <div id={props.id} className={props.className}>
      <h3 id={props.id} onClick={e => props.handleComplete(e)}>
        {props.todo.input}
      </h3>
    </div>
  );
};

export default Todo;
