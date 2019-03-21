import React from "react";

function Task({ item, completed, completedTaskFunction }) {
    // console.log(completedTaskFunction);
  return (
        <div className="task" onClick={(e)=>completedTaskFunction(completed)} >
            <ul>
                <h3><li>{item.task}</li></h3>
            </ul>
            <div className="check">✓</div>
            <div className="checkbox"></div>
    </div>
  );
}


export default Task;

