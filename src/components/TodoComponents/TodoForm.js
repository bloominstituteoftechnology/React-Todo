import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.textChange}
        type="text"
        placeholder="add task"
        value={props.info.task}
        name="task"
      />

      <button onClick={props.enterItem}>Add Item</button>
      <button onClick={props.clearList}>Clear complete</button>
      <button onClick={props.emptyList}>Empty List</button>


    </form>
  );
};

export default TodoForm;
