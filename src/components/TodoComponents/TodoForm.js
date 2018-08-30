import React from "react";
import "./Todo.css";
 function TodoForm(props) {
  return (
    <form>
      <input
        placeholder="..Todo"
        className="input"
        value={props.inputText}
        onChange={props.handleInput}
      />
      <button onClick={props.addItem}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear completed</button>
    </form>
  );
}
 export default TodoForm;