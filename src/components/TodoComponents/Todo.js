import React from 'react';

const Todo = props => {
    console.log(props.task);
    return (
        <div>
            <ul>
                <li>{props.task}</li>
            </ul>
        </div>
    )
}

export default Todo