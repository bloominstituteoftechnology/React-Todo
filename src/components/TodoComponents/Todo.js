import React from "react";
import "./Todo.css"

const Todo = props => (
    <div className="to-do" {...props}>
        - {props.text}
    </div>
);

export default Todo;