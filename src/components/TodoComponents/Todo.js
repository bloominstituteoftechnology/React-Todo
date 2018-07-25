import React from 'react';
import './Todo.css';

const Todo = (props) => {
    let completedTest = props.item.completed ? 'strikethrough' : "";
    return (
        <div>
            <p className={`${completedTest}`} onClick={ ()=> props.onClick(props.item.id) }>{ props.item.task } </p>
        </div>

    );
}

export default Todo;