import React from "react";

const Todo = props => {
    return(
        <div className="todos">
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;