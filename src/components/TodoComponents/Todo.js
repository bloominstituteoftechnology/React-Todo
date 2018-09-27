//is a component that takes in the todo data and displays the task to the screen.

import React from "react";
import "./Todo.css";
//to do simply returns the task item name to the screen
//class name toggles the p tag class names depending on its completed flag
const Todo = (props) => {
    let className = props.completed ? "todo-item completed" : "todo-item";

    const itemClicked = () =>{
        props.toggle(props.id)
    }
        return (
                <ul className={className} 
                    onClick={itemClicked}>
                    <li>{props.task}</li>
                </ul>
        );
}

export default Todo;