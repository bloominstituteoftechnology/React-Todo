import React from "react";
import "../components/Todo.css"

const Todo = props => {
    return(
        <div 
        className={`todo${props.todo.completed ? " completed" : ""}`}
        onClick={() => props.toggleCompleted(props.todo.completed)}
        >
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;