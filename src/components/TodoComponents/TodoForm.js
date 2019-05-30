import React from "react";

const TodoForm = props => {
    return (
      <div>
      <form onSubmit={props.addNewTask}>
        <input className="form-input"
        type="text"
        name="task"
        placeholder="Enter task..."
        value={props.task}
        onChange={props.todoChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={props.clearTask}>Clear Completed</button>
      </div>
    );
};
     
export default TodoForm;