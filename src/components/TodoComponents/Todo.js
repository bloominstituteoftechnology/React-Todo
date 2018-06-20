import React from 'react';

const Todo = props => {
  return (  
   <div
    style={props.todo.completed ? { 
      textDecoration: "line-through",    
      textDecorationColor: "slateblue",
      textDecorationStyle: "wavy" } : null}
    onClick={() => props.handleToggleComplete(props.todo.id)}
> 
{props.todo.task}
</div>
);
};

export default Todo;

  /*    <div
     style={props.todo.completed ? {
       textDecoration: "line-through",    
       textDecorationColor: "red",
       textDecorationStyle: "double"} : null}
    onClick={() => props.handleToggleComplete(props.todo.id)}
    >
    {props.todo.task}
    </div>
    */