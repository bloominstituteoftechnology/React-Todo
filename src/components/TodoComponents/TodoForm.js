import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addToDo}>Add To Do</button>
    </form>
  );
}

export default TodoForm;
