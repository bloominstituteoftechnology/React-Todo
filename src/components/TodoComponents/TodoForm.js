import React from "react";

const TodoForm = props => {
  return (
      <form>
        <input
          type="text"
          placeholder="...todo"
          name="newTodo"
          onChange={props.changeHandler}
          value={props.newTodo}
        />
        <button type="submit" onClick={props.addNewTodo}>
          Add Task
        </button>
        <button type="submit" onClick={props.clearCompleted}>
          Clear Completed
        </button>
      </form>
  );
};

export default TodoForm;
