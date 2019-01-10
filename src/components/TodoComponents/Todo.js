import React from 'react';

const Todo = props => {
    return(
        <h1 className={props.todoItem.completed ? 'completed todo-item' : "todo-item"} onClick={(e) => {props.toggleCompleted(e,props.todoItem.id)}}>{props.todoItem.task}</h1>
    )
}

export default Todo