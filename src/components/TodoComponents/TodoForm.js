import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <div className="inputField">
    <form>
      <input type="text" name="newItem" onChange={props.formEventHandler} value={props.newItem} />
      <div className="formButtons">
        <input type="submit" onClick={props.addNewItem} value="Add To List" />
        <input type="button" value="Clear Complete" />
      </div>
      </form>
    </div>
  );
};

export default TodoForm;
