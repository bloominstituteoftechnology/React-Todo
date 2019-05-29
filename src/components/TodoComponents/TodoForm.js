import React from "react";
import "./Todo.css";
const todoForm = props => {
  return (
    <div className="TodoForm">
      <form action="">
        <input onChange={props.change} value={props.value}type="text" placeholder='enter your task'/>
        <button onClick={props.submit}>Add Todo</button>
        <button>Clear Completed</button>
        <br/> <br/>
        <input type="text" onChange={props.search} onBlur={props.outOfFocus} placeholder='search'/>
      </form>
    </div>
  );
};

export default todoForm;
