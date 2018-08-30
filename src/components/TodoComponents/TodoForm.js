import React from "react";

function ToDoForm(props) {
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addUser}>Add ToDo</button>
      <button onClick={props.toggleToDOComplete}>Add Clear Completed</button>
    </form>
  );
}

export default ToDoForm;