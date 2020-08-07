import React from "react";

const Todo=props=>{
    // console.log(props.chore)
    
  return(
      <div 
        className=
        {`chore${props.chore.completed ? " completed" : ""}`}
        onClick={()=>props.toggleTask(props.chore.id)}
      >
          <p>{props.chore.task}</p>
          {/* <p>{props.chore.id}</p> */}
          {/* <p>{props.chore.completed}</p> */}
      </div>
  )
};

export default Todo;