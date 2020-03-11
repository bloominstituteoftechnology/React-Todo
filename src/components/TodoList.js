import React from 'react';

import Todo from './Todo';

const ToDoList = ({ todos, handleMarkCompleted, handleClearCompleted }) => {
    return (
        <ul>
            {todos && todos.map(todo => <Todo key={todo.id} {...todo} handleMarkCompleted={handleMarkCompleted}/>)}
            <button onClick={() => handleClearCompleted()}>Clear Completed</button>
        </ul>
    )
}

export default ToDoList;