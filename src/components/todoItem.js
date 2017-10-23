import React from 'react';

const todoItem = ({todo, index, toggleComplete, remove}) => (
 <li>
    { todo.item }
    <span>{ todo.completed ? 'completed' : 'incomplete' }</span>
    <button onClick={toggleComplete}>Toggle Complete</button>
    <button onClick={remove}>x</button>
</li>
);

export default todoItem;