import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <ToDo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default ToDoList;