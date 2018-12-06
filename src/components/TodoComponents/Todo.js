import React from "react";

                            //Passed from ToDoList.js
                            //key={data.id} 
                            //taskItem={data.task}

const ToDo = props => {
  return (
    <div>
      <h3>{props.taskItem}</h3>
    </div>
  );
};

export default ToDo;