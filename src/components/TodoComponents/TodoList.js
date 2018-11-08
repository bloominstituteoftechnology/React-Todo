import React from 'react';
import Todo from './Todo';
const TodoList = props => {
    return (
        <>
            {props.todoList.map(todo => (
                <Todo key={todo.id} completed={todo.completed} text={todo.task} />
            ))}
        </>
    );
};

export default TodoList;
