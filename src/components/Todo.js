import React from "react";

const Item = props => {
    return (
        <div
            className={`item${props.task.completed ? "  completed" : ""}`} //ternary operation
            onClick={() => props.toggleTask(props.task.id)}
        >
            <p>{props.task.name}</p>
        </div>
    );
};

export default Item;