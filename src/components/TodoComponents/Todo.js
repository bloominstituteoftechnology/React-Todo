import React from "react";

function Todo(props) {
  let tdi = "to-do-item";
  if (props.complete) {
    tdi += " complete";
  }
  return (
    <div id={props.id} className={tdi}>
      <h4>{props.task}</h4>
    </div>
  );
}

export default Todo;
