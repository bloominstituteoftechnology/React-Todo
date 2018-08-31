import React from 'react';
import "./ToDo.css";

function ToDo(props) {
    return <li 
    className={props.todo.completed ? "strikethrough" : null}    
    onClick={() => props.toggleComplete(props.todo.id)}
>{props.todo.task}</li>;
}

export default ToDo;