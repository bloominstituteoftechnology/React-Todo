import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} placeholder="...todo" />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.completeTodo}>I'm not feeling too good...</button>
    </form>
  );
}

export default TodoForm;