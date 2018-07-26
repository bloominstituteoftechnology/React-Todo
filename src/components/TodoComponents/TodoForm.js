import React from "react";

const TodoForm = props => {
    return (
      <form className="todo-form">
        <input
          className="todo-input"
          type="text"
          value={props.value}
          onChange={props.handleChange}
        />
        <div>
        <button onClick={props.handleAddTodo}>Add Todo</button>
        <button onClick={props.handleClear}>Clear Completed</button>
        </div>
      </form>
    );
  }

  export default TodoForm;
