//is a component that takes in the todo data and displays the task to the screen.

import React from "react";
import "./Todo.css";
//to do simply returns the task item name to the screen
const Todo = (props) => {
    const message = props.completed ? "done" : "not done";

    const itemClicked = () =>{
        props.strike(props.id)
        console.log(props.addClass)
    }
    console.log("todo", props)
    console.log()
        return (
            <p className={props.class} 
                onClick={itemClicked}>
                {props.task} is {message} {props.class}
            </p>
        );
}

export default Todo;