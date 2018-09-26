import React from 'react';
import './Todo.css';

 const Todo = (props) => {
    return (
    <li id = {props.idKey}>

    <input type = 'checkbox' name = {props.todoItem} value = {props.todoItem} onClick = {props.toggleTodo}/>
    
    {props.todoItem}
    </li>
    )
}

 export default Todo; 