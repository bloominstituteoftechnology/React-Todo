import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input 
        value={props.inputText} 
        onChange={props.inputHandler}
        type="text"
        name="todo"
        placeholder="Enter tasks here" />
        <button onClick={props.addTodo}>Add Todo</button>
        <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;