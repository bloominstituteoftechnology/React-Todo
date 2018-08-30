import React from 'react';
import './Todo.css';

import Todo from './Todo';

function TodoList(props) {
    return (
        <ul>
            {props.todoItems.map( (todoItem) => <Todo todoItem={todoItem} toggleTodo={props.toggleTodo} key={todoItem.id} />  )}
        </ul>
    );
}

export default TodoList;
