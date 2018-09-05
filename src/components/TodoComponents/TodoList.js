import React from "react";
import Todo from "./Todo.js";

function TodoList(props) {
console.log(props)

  return (<div>{props.task.taskRead.map(taskRead=><Todo taskRead ={taskRead}/>)}</div>);
}

export default TodoList;
