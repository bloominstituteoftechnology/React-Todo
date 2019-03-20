import React from 'react';

function Todo(props) {
    return ( 
        <div className="container">
            <h1>{props.task}</h1>
        </div>
    )
}

export default Todo