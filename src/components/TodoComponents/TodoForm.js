import React from "react";

const TodoForm = (props) => {
    console.log(props.clearTodo)
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearTodo}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;