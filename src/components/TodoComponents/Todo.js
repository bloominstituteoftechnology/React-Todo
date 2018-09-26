import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = (props) => {
    return (
        <div>
            <div>Todo.js</div>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default Todo;
