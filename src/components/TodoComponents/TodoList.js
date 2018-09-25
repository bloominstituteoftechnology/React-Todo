import React from 'react';
import './Todo.css';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    return (
        <div>
            <Todo />
            <TodoForm />
        </div>
    )
}

export default TodoList;