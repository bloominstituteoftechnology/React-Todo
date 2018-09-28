import React from "react";

 const TodoForm = (props) => {
    return (
    <form>
      <input className ="form-control"
      onChange={props.handleChange}
      type="text"
      name="todo"
      value={props.value} 
      placeholder="...Things to get done"
      />
      <button className="btn-add" onClick={props.handleAdd}>Add Task</button>
      <button className="btn-delete" onClick={props.handleClear}>Completed</button>
    </form>
  );
};
 export default TodoForm; 