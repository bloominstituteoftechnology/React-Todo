import React from 'react';

const todoItem = ({todo, index, toggleComplete, remove}) => {
    const completed = todo.completed ? 'completed' : 'incomplete';
    return (
        <li className="todoList__item">
           <span className={`complete ${completed}`}>{ completed }</span>
           <span className="text">{ todo.item }</span>
           <button onClick={toggleComplete}>Toggle Complete</button>
           <button onClick={remove}>x</button>
       </li>
       )
};

export default todoItem;