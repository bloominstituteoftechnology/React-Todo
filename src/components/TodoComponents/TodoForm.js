import React from "react";

const Form = props => {
  const { task, handleChange, handleAddTasks } = props;
  return (
    <form>
      <input
        type="text"
        value={task}
        placeholder="....todo"
        onChange={handleChange}
      />
      <button onClick={handleAddTasks}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default Form;
