// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo  from "./Todo";

const TodoList = (props) =>{
     return props.array.map(element =>{
         return <div> <Todo id="{element.id}" key={element.id} task={element.task} /> </div>

     })
}


export default TodoList;