import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <div>
            {props.list.map(todo => <Todo item={todo.task} /> )}
        </div>
    );
}

export default TodoList;
