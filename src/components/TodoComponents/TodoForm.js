import React from "react";

const TodoForm = props => {
  return (<div>
        <form onSubmit={props.changeHandler}>
      <input
        type="text"
        name="inputTask"
        onChange={props.changeHandler}
        value={props.newTask}
      />
    </form>
    <button type="submit" onClick={props.newTask}>
        Add Task
      </button>
      <button type="reset" onClick={props.ClearCompleted}>
        Clear Completed
      </button>
  </div>

  );
};

export default TodoForm;
