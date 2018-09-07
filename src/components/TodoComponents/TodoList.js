import React from "react";
import Todo from "./Todo.js";

function TodoList(props) {
console.log(props)

  return (

    <div>{props.task.taskRead.map(taskRead=><Todo cross={props.cross} data = {props} taskRead ={taskRead}/>)}</div>);
}

export default TodoList;
