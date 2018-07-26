// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const ToDoList = props => {
   return (
       <div>{
         props.arrayProp.map(item => <Todo itemProp={item}  toggleComplete={props.toggleComplete}/> )
       }</div>
   )


}

export default ToDoList