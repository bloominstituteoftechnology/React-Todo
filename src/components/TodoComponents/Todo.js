import React from 'react';

const Todo = props => {
    return (
        <div className = "todo">
            <p key = {props.id}>{props.task}</p>
        </div>
    )
   
}

export default Todo; 