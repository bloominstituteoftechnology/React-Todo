import React from 'react';
import './Todo.css';

const Todo = (props) => {
    console.log(props.complete);
    return (
        <li id={props.idKey}>        
            <input 
            id={props.idKey+(props.todoItem.split(" ").join("-"))} 
            type="checkbox" 
            name={props.todoItem} 
            value={props.todoItem} 
            defaultChecked={props.complete} 
            onChange={props.clickStore}
            />
            <label htmlFor={props.idKey+(props.todoItem.split(" ").join("-"))}>{props.todoItem}</label>
            <span className="checkbox" onClick={props.clickCheck}></span>
        </li>

    
    )
}

export default Todo;