//is a component that takes in the todo data and displays the task to the screen.

import React from "react";

const Todo = (props) => {
    console.log("todo", props)
    return (
        <ul className={props.displayStyle}>
            {props.data.map((item, index) => <li key={this.id}>item.task</li>)}
        </ul>
    );
}

export default Todo;