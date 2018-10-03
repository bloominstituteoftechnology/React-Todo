import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <div className="todoForm">
      <input
        type="text"
        placeholder="enter todo item"
        name="newCharacter"
        onChange={props.changeHandler}
        value={props.inputText}
      />
      <button onClick={props.addNewItem}>Submit</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
