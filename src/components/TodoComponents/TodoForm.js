import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addTodo}> Add Todo</button>
    </form>
  );
}

export default TodoForm;
