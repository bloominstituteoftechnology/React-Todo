import React from "react";

function Todo(props) {
  // do more stuff here
  return (
    <div>
        {props.todoTD.task}
    </div>
  );
  // this won't get touched
}

export default Todo;