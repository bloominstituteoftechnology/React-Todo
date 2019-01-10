import React from 'react';

const Todo = props => {
    return(
        <h1 className="todo-item" onClick={(e) => {props.toggleCompleted(e,props.todoItem.id)}}>{props.todoItem.task}</h1>
    )
}

export default Todo