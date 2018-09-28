//is a component that takes in the todo data and displays the task to the screen.

import React from "react";
/to do simply returns the task item
const Todo = (props) => {
    console.log("todo", props)
        return (
            <p className="todo-item">
                {props.task}
            </p>
        );
}

export default Todo;