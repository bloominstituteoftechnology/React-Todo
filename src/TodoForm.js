import React from "react";

let TodoForm = props => {
  return(
  <div>
    <input type="text" onChange={props.updateInputFormText} defaultValue={props.value} />
    <button>add todo</button>
    <button>clear completed</button>
  </div>
  )
}

export default TodoForm;
