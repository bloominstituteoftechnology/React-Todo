import React from 'react';
 
 // here we will add styling to completed todos like line through, then
 // we will add a click function to

 const Todo = props => {
    return (
      <div>
        {props.todo.task}
      </div>
    );
  };
  
  export default Todo;