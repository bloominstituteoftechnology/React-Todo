import React from "react";
import "../TodoComponents/Todo.css";

const TodoForm = props => {
  //   console.log(props);
  const submitClick = e => {
    e.preventDefault();
    props.addTask(props.currentTask);
  };
  return (
    <div>
      <input
        onChange={props.handleEventChange}
        type="text"
        placeholder="Add to-do..."
      />
      <button onClick={submitClick}>Submit</button>
      <button onClick={props.handleClear}>Clear</button>
    </div>
  );
};

export default TodoForm;
