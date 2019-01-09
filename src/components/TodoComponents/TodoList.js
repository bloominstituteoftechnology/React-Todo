import React from "react";

function TodoList(props) {
  // do more stuff here
  return (
    <div>
      {props.todoArray.map((todo, index) => {
        return <div key={index}>hi</div>;
      })}
    </div>
  );
  // this won't get touched
}

export default TodoList;
