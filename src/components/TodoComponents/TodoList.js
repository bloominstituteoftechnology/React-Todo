// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo  from "./Todo";

const TodoList = (props) =>{
     return props.array.map((element,index) =>{
         return <div className = 'todoListItem'> <Todo completed={element.completed} onClickMethod={props.methods} id={element.id} key={index} task={element.task} /> </div>
     })
}


export default TodoList;