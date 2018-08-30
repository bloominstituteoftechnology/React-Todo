import React from 'react';

import './Todo.css';

const Todo = (props) => {
    return (
        <li 
            className = {props.classes.join(" ")} 
            id = {props.id} 
            onClick = { props.onItemClick } 
        >
        { props.item.task }
        </li>
    );
}

export default Todo;
