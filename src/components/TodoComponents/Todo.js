import React from 'react';
 
 // here we will add styling to completed todos like line through, then
 // we will add a click function to style the todo that has been clicked (completed)

 // {props.do.task} is just appending the todo task  

 const Todo = props => {
    return (
      <div 
      onClick={() => props.handleToggleCompleted(props.todo.id)}
      className={props.todo.completed ? `line-through` : null}
      >
        {props.todo.task}
      </div>
    );
  };
  
  export default Todo;