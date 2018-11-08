import React from "react";
import "../TodoComponents/Todo.css"

const TodoForm = props => {
  return (
    <div className="formContainer">
      <form onSubmit={props.addTodo}>
        <input
          type="text"
          name="inputText"
          placeholder="Add New Todo Task!"
          value={props.inputText}
          onChange={props.handleChange}
        />
        <button type="submit">New Todo Task!</button>
        <h1>starting a new chapter.</h1>
      </form>
      <button>Clear Button!</button>
    </div>
  );
};

export default TodoForm;
