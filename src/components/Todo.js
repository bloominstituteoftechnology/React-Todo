import React from "react";

const Todo = props => {
    const handleClick = () => {
        console.log(props.item.id)
        props.handleToggle(props.item.id);
    }
    return(
        <div onClick={handleClick} className={`task${props.item.completed ? "-completed" : ""}`}>
            <p>{props.item.task}</p>
        </div>
    );
}

export default Todo;