import React from "react";

function TodoForm(props) {
  return (
    <div>
      <form onSubmit={props.addNewTodo} className="form-container">
        <input
          type="text"
          name="newTodo"
          placeholder="What would you like to do?"
          onChange={props.changeHandler}
          value={props.newTodo}
        />
        <div className="btn-container">
          <button type="submit" onClick={props.addNewTodo}>
            Add Todo
          </button>
          <button onClick={props.clear}>Clear Completed</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
