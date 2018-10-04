// This should contain your buttons

import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <div>
      <div>
        {props.listArray.map(item => {
          return <h4>{item.task}</h4>;
        })}
      </div>
      <div>
        <form onSubmit={props.addNewTask}>
          <input
            type="text"
            name="newTask"
            onChange={props.changeHandler}
            value={props.newTask}
          />
          <button type="submit" onClick={props.addNewTask}>
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
