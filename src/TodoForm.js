import React from "react";

let TodoForm = props => {
  return(
  <div>
    <input type="text" onChange={props.updateInputFormText} defaultValue={props.value.task} />
    <button onClick={props.addTodo}>add todo</button>
    <button>clear completed</button>
  </div>
  )
}

export default TodoForm;
