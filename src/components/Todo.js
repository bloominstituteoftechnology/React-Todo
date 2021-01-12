import React from "react"
import TodoForm from "./TodoForm"

function Todo({ todo, toggleCompleted }) {
    return(
        <li
            className={todo.completed ? `completed`: null}
            onClick={() => toggleCompleted(todo.id)}
        >
            {todo.task}
        </li>
    )
}

export default Todo