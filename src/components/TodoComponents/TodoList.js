import React from 'react';

import './Todo.css'

const TodoList = props => {
    return(
        <div>
        {props.todoData.map((item, index) => {
    return(
        <ul className="listItems">
        <li
        key={index}
        onClick={() => props.strikeThrough(index)}
        className={item.textDecoration}
        >
    {item.task}
    </li>
    </ul>
    );
    })}
        </div>
    )
}


export default TodoList;