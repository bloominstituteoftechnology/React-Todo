import React from "react";

const Item = props => {
    const handleClick = e => {
        props.toggleItemCompleted(props.item.id);
    };

    return (
        <div 
            onClick={handleClick}
            className={`item${props.item.completed ? "completed" : ""}`}
        >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Item;