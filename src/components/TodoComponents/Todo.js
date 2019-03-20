import React from "react";

function Task({ item }) {
    console.log(item);
  return (
        <div className="task">
            <ul>
                <h3><li>{item.task}</li></h3>
            </ul>
    </div>
  );
}

export default Task;


