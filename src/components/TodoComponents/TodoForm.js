import React from "react";

const TodoForm = props => {
  return (
    <div>
    <form onSubmit={props.handleAdds}>
      <input
        name="task"
        type="text"
        value={props.task}
        placeholder="...todo"
      />
      <button>Add Todo</button>
    </form>
    <button>Clear Complete</button>
    </div>
  );
};

export default TodoForm;
