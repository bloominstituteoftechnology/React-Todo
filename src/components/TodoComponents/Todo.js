//is a component that takes in the todo data and displays the task to the screen.

import React from "react";

const Todo = (props) => {
    console.log("todo", props)
    if (props.todo.length > 0) {
        return (
            <ul className={props.displayStyle}>
                {props.todo.map((item, index) => <li key={this.id}>{item}</li>)}
            </ul>
        );
    } else{
        return (
            <p>Start your list!</p>
        )
    }
}

export default Todo;