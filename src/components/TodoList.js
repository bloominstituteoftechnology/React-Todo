import React from "react"
import Todo from "./Todo"

const TodoList = (props) => {
    return(
        <div className="todo-list">
            {props.taskList.map((task) =>(
                <Todo key={task.id} task={task} toggleTask={props.toggleTask}/>
            ))}
            <div className="clear-button">
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Tasks
            </button>
            </div>
        </div>
    )
}

export default TodoList;