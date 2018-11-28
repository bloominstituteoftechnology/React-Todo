import React from 'react';

const Todo = props => (
    <li onClick={() => props.markComplete(props.item)} className={`complete-${props.item.completed}`}>
        {props.item.task}
    </li>
);

export default Todo;