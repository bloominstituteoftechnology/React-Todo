import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
    <div className="todo"
        style={props.todo.completed ? { textDecoration: 'line-through'} : null}
        onClick={() => props.toggleCompleted(props.todo.id)}>
        {props.todo.task}
    </div>
    );
};

export default Todo;