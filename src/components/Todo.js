import React from "react";
import "./Todo.css";

const Todo = (props) => {

    const handleClick = () => {
        props.toggleList(props.item.id)
    }

    return(
        <div onClick={handleClick}
        className={`item${props.item.purchased ? " purchased" : ""}`}
    >
        <p>{props.item.task} </p>
        </div>
    )


}

export default Todo