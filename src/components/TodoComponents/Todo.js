import React from 'react';
import './Todo.css';
import { getPortPromise } from 'portfinder';

const Todo = (props) => {
    return (
        <div className='todo-container'>
            <Title nameOfClass='title' title='List-O-Matic' />
        </div>
    )
}

const Title = (props) => {
    return (
        <h1 className={props.nameOfClass}>{props.title}</h1>
    )
}

export default Todo;
