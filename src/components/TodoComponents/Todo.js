import React from 'react';
import ReactDOM from "react-dom";

function Todo (props){
    return (
        <li className={props.styles}>{props.task}</li>
    )
}

export default Todo