import React from 'react';
import Todo from "./Todo.js";


const ToDoList = props => {
 let todoArray = props.todoData.map(item => {
    return <Todo completed = {item.completed} clearCrossThrough = {props.clearCrossThrough} key={item.id} id={item.id} task={item.task}/>; 
   }   
);

return <div>
    <h1> ToDo List </h1>
    {todoArray}
    </div> 
 };

  
  export default ToDoList;
  

