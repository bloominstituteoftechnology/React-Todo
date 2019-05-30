import React from "react";

const TodoForm = props => {
    return (
      <form onSubmit={props.addNewTask}>
        <input className="form-input"
        type="text"
        name="task"
        placeholder="Enter task..."
        value={props.task}
        onChange={props.todoChange}
        />
        <button type="submit">Add Todo</button>
        <button onClick={props.clearTask}>Clear Completed</button>
      </form>
    );
};

export default TodoForm;