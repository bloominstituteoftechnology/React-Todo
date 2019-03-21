import React from "react";

function Task({ item,  completedTaskFunction }) {
  return (
        <div className={`task${item.completed ? ' toggled' : ""}`}
        onClick={() => completedTaskFunction(item.id)}
        >
            <ul>
                <h3><li>{item.task}</li></h3>
            </ul>
            <div className="check">✓</div>
            <div className="checkbox"></div>
    </div>
  );
}


export default Task;

