import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form id="todoFormElement">
      <input
        type="text"
        placeholder="enter todo item"
        name="newCharacter"
        onChange={props.changeHandler}
        value={props.inputText}
      />
      <input type="submit" value="Submit" onClick={props.addNewItem} />

      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
