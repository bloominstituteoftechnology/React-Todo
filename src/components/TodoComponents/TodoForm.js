import React from "react";

const TodoForm = props => {
    return (
      <div>
        <form onSubmit={props.newTodo}>
          <input
            type="text"
            name="inputText"
            placeholder="add new Task"
            value={props.inputText}
            onChange={props.handleChange}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  };
  

export default TodoForm;