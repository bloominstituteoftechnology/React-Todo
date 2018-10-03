import React from 'react';

import './Todo.css';

const Todo = props => {
    return (
        <p className="todo-task">{props.todo.task}</p>
    )
}

export default Todo;