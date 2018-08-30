import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input value={props.task} onChange={props.handleInput} placeholder="...todo"/>
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;