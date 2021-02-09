import React from 'react';

const ToDo = props => {
    return(
        <div className={`item${props.item.completed ? 'completed' : ''}`}>
            <p>{props.item.task}</p>
        </div>
            
    )
}


export default ToDo;