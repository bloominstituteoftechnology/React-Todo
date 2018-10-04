// This should contain your buttons

import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <div>
      <div>
        {props.listArray.map((item, index) => {
          return (
            <h4 className={item.style} onClick={() => props.finishMe(index)}>
              {item.task}
            </h4>
          );
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
          <button onClick={props.deleteMe}>Clear Completed</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
