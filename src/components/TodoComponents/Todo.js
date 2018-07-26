import React from 'react';
import './Todo.css';

const Todo = props => {
    return(
        <div>
            {props.item}
        </div>
    );
}

export default Todo;