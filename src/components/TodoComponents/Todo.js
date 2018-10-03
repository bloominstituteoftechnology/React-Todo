import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return (
        <li 
        onClick={(event) => {props.clickHandler(event, props.item) }} 
        className='list-item'>{props.item}</li>
    )
}
export default Todo;