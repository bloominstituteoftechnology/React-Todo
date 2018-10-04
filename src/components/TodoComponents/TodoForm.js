import React from "react";

const TodoForm = props => {
  return (
    <div className="todo-form">
      <form onSubmit={props.addNewTodo}>
        <input
          className="input"
          type="text"
          name="newTodo"
          placeholder="...todo"
          onChange={props.changeHandler}
          value={props.newTodo}
        />
        <div className="buttons">
          <button onClick={props.addNewTodo} className="add-todo">
            Add Todo
          </button>
          <button onClick={props.filterComplete} className="clear-completed">
            Clear Completed
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
