import React from "react";
import "./Todo.css"

const Todo = props => {
    return (
        <div 
            className={`todo${props.item.completed ? " completed" : ""}`}
            onClick={e => props.toggleItem(props.item.id)}  
        >
            {props.item.task}
        </div>
    );
};

export default Todo;