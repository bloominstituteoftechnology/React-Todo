import React from "react"
import Todo from "./Todo"

const TodoList = props => {
    return (
        <div className="todo-list">
            <button className="clear-btn" onClick={props.clearComplete}>Clear Complete</button>
            {props.todos.map(task => (
                <Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted}/>
            ))}
            
        </div>
    )
}

export default TodoList;