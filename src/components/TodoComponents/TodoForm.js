import React from "react";
function TodoForm(props) {
  return (
    <form>
      <input value={props.task} onChange={props.handleInput} />
      <button onClick={props.addTask}></button>
    </form>
  );
}
export default TodoForm
