import React from "react";

import TodoForm from "./TodoForm";

const Todo = (props)=> {


   return (

  <div>
      <p>{props.todo.id}</p>
   <h2>task:{props.todo.task}</h2>
   <h2>completed:{props.todo.completed ? "True" : "False"}</h2>
    <button onClick = {()=>props.toggle(props.todo.id)}>XX</button>



  </div>



  )
      



}


export default Todo