import React from 'react';
import Todo from "./Todo.js";



const TodoList = (props) => {
    return (
        <div className="list">
            {props.tasks.map(task => {
                return <Todo item={task.task} clickHandler={props.clickHandler} />
            })}
        </div>
    )
}

export default TodoList