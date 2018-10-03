import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <h3 onClick={props.changeCompleted}>{props.task}</h3>
        </div>
    );
}

export default Todo;