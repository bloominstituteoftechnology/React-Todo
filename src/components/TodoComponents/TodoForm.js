import React from "react";

const TodoForm = props => {
  return (
    <div className="todo-form">
      <form onSubmit={props.addNewTodo}>
        <input
          type="text"
          name="newTodo"
          placeholder="...todo"
          onChange={props.changeHandler}
          value={props.newTodo}
        />
        <button onClick={props.addNewTodo}>Add Todo</button>
        <button onClick={props.filterComplete}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
