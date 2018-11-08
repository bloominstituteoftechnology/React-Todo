import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.addTodo}>
        <input
          type="text"
          name="inputText"
          placeholder="Add New Todo Task!"
          value={props.inputText}
          onChange={props.handleChange}
        />
        <button type="submit">New Todo Task!</button>
      </form>
    </div>
  );
};

export default TodoForm;
