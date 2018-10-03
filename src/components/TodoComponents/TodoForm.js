import React from "react";

function TodoForm(props) {
  return (
    <div>
      <form onSubmit={props.addNewTodo}>
        <input
          type="text"
          name="newTodo"
          placeholder="todo"
          onChange={props.changeHandler}
          value={props.newTodo}
        />
        <button type="submit" onClick={props.addNewTodo}>
          Add Todo
        </button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;
