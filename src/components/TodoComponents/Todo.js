import React from "react";
import "./Todo.css"

const Todo = props => (
    <div {...props}>
        {props.text}
    </div>
);

export default Todo;