import React from 'react';
import './Todo.css';

import Todo from './Todo';

function TodoList(props) {
    return (
        <ul>
            {props.todoItems.map( (todoItem) => <Todo todoItem={todoItem} />)}
        </ul>
    );
}

export default TodoList;
