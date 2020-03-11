import React from 'react';

import Todo from './Todo';

const ToDoList = ({ todos, handleMarkCompleted, handleClearCompleted }) => {
    return (
        <ul>
            {todos.length > 0 ? todos.map(todo => <Todo key={todo.id} {...todo} handleMarkCompleted={handleMarkCompleted}/>) : <h2>Add a todo!</h2>}
            <button onClick={() => handleClearCompleted()}>Clear Completed</button>
        </ul>
    )
}

export default ToDoList;