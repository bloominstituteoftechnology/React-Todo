import React from "react";

function ToDoForm(props) {
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addUser}>Add user</button>
    </form>
  );
}

export default ToDoForm;