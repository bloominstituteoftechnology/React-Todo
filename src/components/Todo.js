import React from "react";

const Item = props => {
    const handleClick = e => {
        props.toggleItemCompleted(props.task.id);
    };

    return (
        <div 
            onClick={handleClick}
            className={`task${props.task.completed ? "completed" : ""}`}
        >
            <p>{props.task.task}</p>
        </div>
    );
};

export default Item;