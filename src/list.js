import React from "react";
const ToDoList = props => {
    return (
      <div>
        {props.toDos.map((toDo, index) => (
          <div key={toDo + index}><input type="checkbox"></input>{toDo}</div>
        ))}
      </div>
    );
  };
  export default ToDoList;