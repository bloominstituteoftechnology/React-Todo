import React from 'react';


//<Todo /> is a component that 
//takes in the todo data and displays the task to the screen.
const Todo = props => {
    return (
      <div>
        <p id={props.id}>{props.task}</p>
        
      </div>
    );
}


export default Todo;

