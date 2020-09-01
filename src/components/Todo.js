import React from 'react';

const Todo = props => (
    <div
        onClick={() => props.toggleTask(props.todo.id)}
        className={`todo${props.todo.completed ? "completed" : ""}`}
    >
        <p>{props.todo.task}</p>
    </div>
)




export default Todo;