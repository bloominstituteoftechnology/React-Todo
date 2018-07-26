import React from 'react';
import ReactDOM from "react-dom";

function Todo (props){
    return (
        <li id={props.id} className={`${props.styles}`}  onClick={props.updateTask}>{props.task}</li>
    )
}

Todo.f = () => console.log('clicked');

export default Todo