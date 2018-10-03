import React from "react";

const TodoForm = props => {
  return (
    <div className="todoForm">
      <form onSubmit={props.addNewTask}>
      <input 
      type="text" 
      placeholder="Add a new task" 
      name="inputText"
      value={props.inputText}
      onChange={props.changeHandler}
      />
      <button 
      type="submit"
      onClick={props.addNewTask} 
      >Add New Task</button>
      <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
