import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input
        value={props.newTodoText}
        type="text"
        onChange={props.handleChanges}
        name="newTodoText"
      />
    </form>
  );
}

export default TodoForm;
