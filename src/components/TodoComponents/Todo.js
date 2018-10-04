import React from 'react';


//<Todo /> is a component that 
//takes in the todo data and displays the task to the screen.
const Todo = props => {
let classes = "todoItem";
  if(props.completed) {
    classes += " done"
 }

    return (
      <div>
        <p onClick={props.clearCrossThrough} className={classes} id={props.id}>{props.task}</p>
        
      </div>
    );
}


export default Todo;

