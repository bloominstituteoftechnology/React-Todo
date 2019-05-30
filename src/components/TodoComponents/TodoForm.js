import React from "react";

const TodoForm = props => {
    return (
      <form onSubmit={props.addNewTask}>
        <input 
        type="text"
        name="task"
        placeholder="enter task"
        value={props.task}
        onChange={props.todoChange}
        />
        <button type="submit">Add Todo</button>
        <button type="button">Clear Completed</button>
      </form>
    );
};

export default TodoForm;