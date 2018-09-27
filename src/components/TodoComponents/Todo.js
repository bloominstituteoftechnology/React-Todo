//is a component that takes in the todo data and displays the task to the screen.

import React from "react";
import "./Todo.css";
//to do simply returns the task item name to the screen
//class name toggles the p tag class names depending on its completed flag
const Todo = (props) => {
    let className = props.completed ? "todo-item completed" : "todo-item";

    const itemClicked = () =>{
        props.strike(props.id)
        console.log(className)
    }
    console.log("todo", props)
    console.log()
        return (
            <p className={className} 
                onClick={itemClicked}>
                {props.task}
            </p>
        );
}

export default Todo;