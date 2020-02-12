import React from "react";

import Todo from "./Todo";

// Maps over the tasks array and creates a new item for each element
const TodoList = props => {
  //   console.log(props.tasks);
  return (
    <div className="shopping-list">
      {props.tasks.map(item => {
        /* {
          console.log(item); 
        } */

        return <Todo item={item} key={item.id} toggleTask={props.toggleTask} />;
      })}
      <button className="clear-btn" onClick={props.clearTask}>
        Clear Task
      </button>
    </div>
  );
};

export default TodoList;
