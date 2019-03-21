import React from "react";

const Task = props => {
  return (
        <div className={`task${props.item.completed ? ' toggled' : ""} `}
        onClick={() => props.completedTaskFunction(props.item.id)}
        >
            <ul>
                <h3><li>{props.item.task}</li></h3>
            </ul>
            {/* <div className="check">✓</div>
            <div className="checkbox"></div> */}
    </div>
  );
};


export default Task;

