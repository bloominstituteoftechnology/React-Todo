import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div 
        value={props.todo.id}
        className={props.todo.completed ? 'completed todo-list' : 'todo-list'}
        onClick={props.toggleCompleted}
        id={props.todo.display ? null : 'display-none'}
        
        > 
            {props.todo.task}
        </div>
    );
}

export default Todo;