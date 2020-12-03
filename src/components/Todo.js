import React from "react";

const Todo = (props) => {
    console.log (Todo);
  return (
    <div
      className={`todo${props.todo.completed ? ".completed" : ""}`}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      <p>{props.todo.name}</p>
    </div>
  );
};

export default Todo;

// CSS logic above:
// if the item is purchased (props.item.purchased == true)
// add the 'purchased' class (lighter color & strikethrough)
