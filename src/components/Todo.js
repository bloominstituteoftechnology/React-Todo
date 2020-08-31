import React from "react";

const Todo = props => {
    return(
        <div 
        className="todos"
        onClick={() => props.toggleCompleted(props.todo.id)}
        >
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;