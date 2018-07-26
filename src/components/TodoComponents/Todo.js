import React from 'react';
import './Todo.css';

const Todo = props => {
    return(
        <div className='task'>
            {props.item}
        </div>
    );
}

export default Todo;