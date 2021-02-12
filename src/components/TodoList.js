import React from 'react';

import Todo from "./Todo";


const TodoList = props => {
    return (
        <div className="todo-list">
            {props.task.map(task => (
                <Todo task={task} />
            ))}
        </div>
    )
}


export default TodoList
