import React from "react";

const Todo = props => {
  return (
    <div
      style={
        props.todo.completed
          ? {
              textAlign: "center",
              textDecoration: "line-through",
              color: "black",
              backgroundColor: "green",
              padding: "2%",
              minWidth: "150px",
              border: "1px solid black",
              borderRadius: "5%",
              margin: "5px 0"
            }
          : {
            textAlign: "center",
              color: "black",
              backgroundColor: "darkred",
              border: "1px solid black",
              borderRadius: "5%",
              margin: "5px 0",
              padding: "2%",
              minWidth: "150px"
            }
      }
      onClick={() => props.handlerToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
