// this does what character does
import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div>
            <p
                onClick={() => props.changeComplete(props.todoOnProps.id)}
                className={`todo-thing ${props.todoOnProps.completed}`}
            >{props.todoOnProps.task}</p>
            {/* {props.todoOnProps.id}} */}
        </div>
    )
}

export default Todo;