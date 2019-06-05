import React from 'react';
const TodoForm = props => {
  return (
    <form className = "todo-form">
      <input className = "input"
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="text here"
      />
      <br></br>
      <br></br>
      <button className = "add" onClick={props.handleAddTodo}>Add Todo</button>
      <button  className="clearC" onClick={props.handleClearTodos}>Done</button>
    </form>
  );
};

export default TodoForm;
