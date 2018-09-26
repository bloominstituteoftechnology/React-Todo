import React from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';




const Todo = () => {
    return (
        <div>
            <TodoList items='todoData'/>
            <TodoForm />
        </div>
    )
}

export default Todo;