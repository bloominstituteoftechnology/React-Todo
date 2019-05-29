import React from "react";

const TodoForm = props => {
    return (
      <form onSubmit="">
        <input 
        type="text"
        name="todo"
        placeholder="enter task"
        onChange={props.handleInputChange}
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
};

export default TodoForm;