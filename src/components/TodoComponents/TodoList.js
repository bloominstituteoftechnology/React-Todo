import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <ul>{props.todos.map (todo => <Todo key={todo.id} objective={todo.name}/>)} </ul>
    )
};

export default TodoList;


