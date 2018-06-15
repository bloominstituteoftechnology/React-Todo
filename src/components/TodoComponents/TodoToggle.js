import React from 'react';

const TodoToggle = props => {
    return(
        <div
            style={props.yetAnotherTodo.completed ? {textDecoration: 'line-through'} : null}
            onClick={() => props.secondPropToggleTaskComplete(props.yetAnotherTodo.id)}
        >
            {props.yetAnotherTodo.task}
        </div>
    ) ;
}
export default TodoToggle ;