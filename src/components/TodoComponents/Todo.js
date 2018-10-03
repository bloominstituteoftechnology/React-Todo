import React from "react";

import "./Todo.css"

const Todo = props => {
    let tag;
    if (props.item.completed) tag = "completed";
    else tag = "";
    return(
        <li index={props.index} onClick={props.toggle} className={tag}>{props.item.task}</li>
    );
};

export default Todo;