import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.completeTask}>
      <input
        type="text"
        value={props.task}
        onChange={props.changeHandler}
        placeholder="task"
        name="task"
      />
      <button onClick={props.createTask}>Create</button>
      <button onClick={props.clearCompleted}>Clear completed</button>
    </form>
  );
};

export default Form;
