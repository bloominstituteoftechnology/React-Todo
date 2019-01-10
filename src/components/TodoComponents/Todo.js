import React from 'react';

const Todo = props => {
    return(
        <h1 onClick={() => {props.toggleCompleted(props.todoItem.id)}}>{props.todoItem.task}</h1>
    )
}

export default Todo