import React from 'react';
import './Todo.css';
import TodoList from './TodoList';

const Todo = props => {
    const {task} = props.taskProps;
    return(
        <div>
            <h2>{task}</h2>
        </div>
    )
}

export default Todo;