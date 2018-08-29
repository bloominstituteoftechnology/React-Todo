import React from "react";
import "./Todo.css";

 function TodoForm(props) {
  return (
    <form>
      <input class = 'input'value= {props.inputText} onChange= {props.handleInput}/>
      <button onClick = {props.addItem}>Add Todo Item</button>
      <button onClick = {props.clearCompleted}>Clear List</button>
    </form>
  );
}

 export default TodoForm;
