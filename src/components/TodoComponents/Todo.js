import React from 'react';

function Todo(props) {
    return ( 
        <div className="container">
            <h1>The task: {props.todoProp.task}</h1>
        </div>
    )
}

export default Todo