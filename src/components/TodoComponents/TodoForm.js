import React from "react";

const Form = props => {
  const { task, handleChange, handleAddTasks, handleRemoveTask } = props;
  return (
    <form>
      <input
        type="text"
        value={task}
        placeholder="....todo"
        onChange={handleChange}
      />
      <button onClick={handleAddTasks}>Add Todo</button>
      <button onClick={handleRemoveTask}>Clear Completed</button>
    </form>
  );
};

export default Form;
