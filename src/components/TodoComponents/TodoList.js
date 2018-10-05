import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <ul>{props.todos.map (todo => <Todo removeHandler={props.removeHandler} key={todo.id} objective={todo}/>)} </ul>
    )
};

export default TodoList;


