import React from 'react';
import TodoList from './TodoList';

const Todo = props => {
    const handleClick = () => {
        props.handleItemToggle(props.item.id);
    }
    return (
        <div onClick={handleClick} className={`task${props.item.completed ? ' completed' : ''}`}>
            <p className='new-item'>{props.item.task}</p>
        </div>
    )
}

export default Todo;