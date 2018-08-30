import React from "react";

function UserForm(props) {
  return (
    <form>
      <input value={props.item} onChange={props.handleInput} />
      <button onClick={props.addTodo}>Add todo</button>
      <button onClick={props.clear}>clear</button>
    </form>
  );
}

export default UserForm;