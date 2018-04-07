import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

const destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <h1>Todo List!</h1>
        <TodoList />
    </div>,
    destination
);