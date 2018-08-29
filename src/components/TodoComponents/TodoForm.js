import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addTodo}>Add todo</button>
      <button onClick={props.removeTodo}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
