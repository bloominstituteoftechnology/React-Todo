import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
    return (
        <div>
            <h2>Todo List</h2>
            <Todo />
            <TodoForm />
        </div>
    );
};

export default TodoList;