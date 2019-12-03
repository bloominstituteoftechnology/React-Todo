import React from "react";

import Item from "./TodoForm";

const Todo = props => {
    return (
        <div className="Todo-list">
          {props.stuff.map(item => (
            <Item
              key={item.id}
              item={item}
              togglePurchased={props.togglePurchased}
            />
          ))}
          <button className="clear-btn" onClick={props.clearPurchased}>
            Clear Purchased
          </button>
        </div>
      );
    };
    
    export default Todo;