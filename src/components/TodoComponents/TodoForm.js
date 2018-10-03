import React from "react";

const TodoForm = props => {
  return (
    <div className="todoForm">
      <input 
      type="text" 
      placeholder="Add a new task" 
      name="inputText"
      value={props.inputText}
      onChange={props.changeHandler}
      />
      <input type="submit" />
      <button>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
