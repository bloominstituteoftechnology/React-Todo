import React from 'react';
import Todo from './Todo';

import './Todo.css';

const TodoList = (props) => {
    return (
        <ul className = "unordered-list">
            {props.todoList.map(todoItem => {
                return (
                    <Todo 
                        key = { todoItem.id } 
                        id = { todoItem.id } 
                        classes = { todoItem.classes } 
                        item = { todoItem } 
                        onItemClick = { props.onItemClick }
                    />
                );
            })}
        </ul>
    );
}

export default TodoList;
