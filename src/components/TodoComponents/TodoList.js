// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

import './TodoList.css';

export default function TodoList(props) {
    return (
        <div className="todo-list">
            <Todo />
            <TodoForm />
        </div>
    )
}