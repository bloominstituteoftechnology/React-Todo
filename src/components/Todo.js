import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.handleToggleTodo(props.item.id);
    }

    return (
        <div onClick={handleClick}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo;