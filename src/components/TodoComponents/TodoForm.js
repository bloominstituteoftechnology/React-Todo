import React from 'react';
import TodoList from './TodoList';
import Todo from './Todo';

const TodoForm = (props) => {
    return (
        <div>
            <TodoList />
            <Todo />
        </div>
    )
}

export default TodoForm;
