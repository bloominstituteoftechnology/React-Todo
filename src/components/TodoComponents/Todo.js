import React from 'react';
import './Todo.css';

const Todo = props => {
    return(
        <div onClick={props.clear} className='task'>
            {props.item}
        </div>
    );
}

export default Todo;