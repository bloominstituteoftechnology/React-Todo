import React from "react";

const Form = props => {
  const { task, handleChange, handleAddTasks, handleRemoveTask } = props;
  return (
    <form>
      <input
        type="text"
        value={task}
        placeholder="....add todo or to don't"
        onChange={handleChange}
      />
      <button className="add" onClick={handleAddTasks}>
        Add Todo
      </button>
      <button className="clear" onClick={handleRemoveTask}>
        Clear Completed
      </button>
    </form>
  );
};

export default Form;
