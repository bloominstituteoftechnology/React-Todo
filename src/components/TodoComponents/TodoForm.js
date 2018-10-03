import React from "react";

const TodoForm = props => {
  <form>
    <input type="text" onChange={props.handleInputChange} />
    <button onClick={props.handleNewToDo}>Add Todo</button>
    <button>Clear All</button>
  </form>;
};

export default TodoForm;
