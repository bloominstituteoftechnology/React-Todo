import React from 'react';
import TodoList from './TodoList';

const Todo = props => {
    localStorage.setItem(`TodoItem, ${props.item.id}`, props.item.item);
    // localStorage.getItem(
    return (
        <div
        className={`item${props.item.completed ? "completed" : ""}`}
        onClick={() => props.toggleItem(props.item.id)}
        style={props.item.completed ? {textDecoration: 'line-through'}: null}
        >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;