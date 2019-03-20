import React from 'react';

function Todo(props) {
    return ( 
        <div className="container">
            <h2>Task: {props.todoProp.task}</h2>
        </div>
    )
}

export default Todo