import React from "react";

const TodoForm = props => {
    return (
      <form onSubmit={props.addNewTask}>
        <input 
        type="text"
        name="todo"
        placeholder="enter task"
        value={props.value}
        onChange={props.todoChange}
        />
        <button onClick={props.addNewTask}>Add Todo</button>
        <button onClick={props.clearTask}>Clear Completed</button>
      </form>
    );
};

export default TodoForm;