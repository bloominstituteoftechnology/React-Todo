import React from 'react';

const Todo = props => {
    return (
        <React.Fragment>
            <h1>
                <strong>task:</strong> {props.todoTask.task} 
            </h1>
            <p> 
                <strong>id:</strong> {props.todoTask.id} 
            </p>
            <p>
                <strong>completed: </strong> {props.todoTask.completed} 
            </p>
        </React.Fragment>
    )
}

export default Todo