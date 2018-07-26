import React from "react";
import "../TodoComponents/Todo.css"


const Todo = props => {
  return (
    <div
      onClick={() => props.toggleComplete(props.itemProp.id)}
    className={props.itemProp.completed ? "liner":null}   >  {/*{ternary statement}*/}
      {props.itemProp.task}
    </div>
  );
};

export default Todo;