import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div 
            className={props.todo.completed ? 'completed todo-list' : 'todo-list'}
            onClick={()=> props.toggleCompleted(props.todo.id)}
            id={props.todo.display ? null : 'display-none'}
        > {props.todo.task}</div>
    );
}

export default Todo;