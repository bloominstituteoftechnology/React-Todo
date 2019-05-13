import React from 'react';
import '../index.css';



const ToDo = (props) => {
    console.log(props, "Todo Props");
    return (
        <div className={props.complete  ? "text-done": ""} onClick={props.handleToggle}>{props.todo}</div>
    )
}

export default ToDo;
