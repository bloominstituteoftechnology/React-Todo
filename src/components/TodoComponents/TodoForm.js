import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input 
      value={props.task} 
      onChange={props.handleInputChange} 
      placeholder="...todo"
      type="text"
      name="todo"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;