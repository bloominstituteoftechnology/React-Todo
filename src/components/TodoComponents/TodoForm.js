import React from "react";

function UserForm(props) {
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addTodo}>Add todo</button>
    </form>
  );
}

export default UserForm;