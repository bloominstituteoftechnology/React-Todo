import React from 'react';
import Todo from "./Todo.js";


const ToDoList = props => {
 let todoArray = props.todoData.map(item => {
    return <Todo id={item.id} task={item.task}/>; 
   }   
);
return <div>{todoArray}</div> 
 };

  
  export default ToDoList;
  

