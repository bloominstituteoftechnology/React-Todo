import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.textChange}
        type="text"
        placeholder=""
        value={props.info.task}
        name="task"
      />

      <button onClick={props.enterItem}>Add</button>
      <button onClick={props.clearList}>Clear</button>
      <button onClick={props.emptyList}>Empty</button>


    </form>
  );
};

export default TodoForm;
