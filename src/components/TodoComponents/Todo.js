import React from "react";

const Todo = props => {
    return (
        <div className="NewTodo"
             onClick={() => props.toggleItem(props.todo.id)}>
             <p>{props.todo}</p>
        </div>
    )
}

export default Todo;



