import React from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.toggleDone(props.item.id);
  };

  return (
    <>
    <div
      onClick={handleClick}
      className={`item${props.item.completed ? " completed" : ""}`}
    >
      <p>{props.item.task}</p>
    </div>

      <button className="clear-btn" 
      onClick={props.editTodo}>
        Edit Todo
      </button>
    </>
   
  );
};

export default Todo;
