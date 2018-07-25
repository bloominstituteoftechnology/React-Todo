import React from 'react';
import ReactDOM from "react-dom";

function Todo (props){
    console.log("jaskjkas")
    return (
        <li className={props.styles}>{props.task}</li>
    )
}

export default Todo