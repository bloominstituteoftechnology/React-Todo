import React from 'react';
import './Todo.css';

const Todo = props => {
    // console.log(props)
    return (
        
        <div>
            <p onClick={(e) => {props.toggleCompleted(e, props.id, props.completed)}} className="paragraph">{props.task}</p>
        </div>
    )
}

export default Todo;