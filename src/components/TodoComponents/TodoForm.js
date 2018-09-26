//will hold your input field and your Add Todo and Clear Completed buttons.

import React from "react";

const TodoForm = (props) => {
    return (
        <div className="form-container">
          <h1>Todo List: MVP</h1>
          <input onChange={props.action.input} />
          <button onClick={props.action.add}>Add Todo</button>
          <button onClick={props.action.remove}>Clear Completed</button>
      </div>
      );
}

export default TodoForm;