import React from "react";

function Todo(props) {
  return <li onClick={props.toggleCompleted}>
                    {props.propsTodo}  
        </li>;
  //props.propsTodo replaced
}

export default Todo;
