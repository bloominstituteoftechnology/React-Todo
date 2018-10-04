import React from "react";

const Todo = props => {
  return (
    <div 
    className = {props.todo.completed ? 'done' : 'notDone'}
    onClick={props.toggleCompleted} 
    id={props.todo.id} 
    style={props.todo.completed ? {textDecoration: 'line-through', color: 'red'} : {textDecoration: 'none', color: 'white'} }
    >
      <p>
      {props.todo.task}
      </p>
    </div>
  );
};

export default Todo;
