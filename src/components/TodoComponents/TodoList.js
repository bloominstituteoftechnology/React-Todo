import React from 'react';
import './Todo.css';

const TodoList = props => {
   return (
        <ul>{props.todos.map((todo, index) => {
           return  <li key = {Math.random()}> {todo['task']} </li>;
            })}
            </ul>
    );
};

export default TodoList;