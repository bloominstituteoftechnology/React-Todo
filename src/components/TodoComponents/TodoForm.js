import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input
      value={props.inputText}
      onChange={props.handleInput}
      placeholder={'Insert Task'} />
      <button onClick={props.addTodo}>Add todo</button>
      <button onClick={props.removeCompleted}>Clear todo</button>
    </form>
  );
}

export default TodoForm;