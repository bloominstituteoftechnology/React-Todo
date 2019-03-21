import React from "react";

const Task = props => {
  return (
        <div className={`task${props.item.completed ? ' toggled' : ""} `}
        onClick={() => props.completedTaskFunction(props.item.id)}
        >
           <div class="cell">
                <h3>{props.item.task}</h3>
                <div class="colors">
                  <div class= "colorPicker1 hover" onClick={props.changeBackground}></div>
                  <div class= "colorPicker2"></div>
                  <div class= "colorPicker3"></div>
                  <div class= "colorPicker4"></div>
                </div>
              </div>

    </div>
  );
};


export default Task;

