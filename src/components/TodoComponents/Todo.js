import React from 'react';

const Todo = (props) => {
    return (
        <div className={props.todo.completed ? "singleTodo completed" : "singleTodo not-completed" } 
        onClick = {() => props.toggleStrike(props.todo.id)}>
            {props.todo.task}

        </div>
    )
}

export default Todo;
