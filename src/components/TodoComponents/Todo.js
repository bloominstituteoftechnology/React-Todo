import React from "react";

import Item from "./TodoList";

const Todo = props => {
    return (
        <div className="Todo-list">
          {props.groceries.map(item => (
            <Item
              key={item.id}
              item={item}
              toggleCompleted={props.toggleCompleted}
            />
          ))}
          <button className="clear-btn" onClick={props.clearCompleted}>
            Clear Completed
          </button>
        </div>
      );
    };

    export default Todo;
