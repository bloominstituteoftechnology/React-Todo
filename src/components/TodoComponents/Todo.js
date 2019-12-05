import React from "react";

const Todo = props => {
    return (
        <div 
            className={`todo${props.item.completed ? ".completed" : ""}`}
            onClick={e => props.toggleItem(props.item.id)}  
        >
            {props.item.task}
        </div>
    );
};

export default Todo;