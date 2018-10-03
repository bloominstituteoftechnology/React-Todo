import React from "react";

function TodoForm(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="todo"
          //   onChange={}
        />
        <button type="submit">Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;
