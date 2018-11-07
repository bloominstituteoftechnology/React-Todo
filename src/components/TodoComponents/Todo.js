// this does what character does
import React from 'react';

const Todo = props => {
    return (
        <div>
            <p>{props.todoOnProps.task}</p>
            {/* {props.todoOnProps.id}} */}
        </div>
    )
}

export default Todo;