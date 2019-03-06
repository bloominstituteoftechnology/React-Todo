import React from 'react';

const Todo = props => {
    return (
        <React.Fragment>
            <h1>
                <strong>task:</strong> {props.todoTask.task} 
            </h1>
        </React.Fragment>
    )
}

export default Todo