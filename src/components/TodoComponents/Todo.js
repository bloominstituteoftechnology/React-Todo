import React from "react";

const Todo = props => {
    return(
        <li index={props.index} onClick={props.toggle}>{props.item}</li>
    );
};

export default Todo;