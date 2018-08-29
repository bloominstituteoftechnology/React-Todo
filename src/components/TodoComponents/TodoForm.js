import React from "react";

const TodoForm = (props) => {
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onCLick={props.clearTodo}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;