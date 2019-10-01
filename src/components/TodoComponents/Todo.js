import React from "react";

const Todo = props => {
    return (
        <div className={`item${props.item.selected ? ' selected' : ''}`}
        onClick={() => props.toggleList(props.item.id)}>
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;

