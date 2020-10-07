import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div 
        className={props.item.completed ? "completed" : "incomplete"} 
        onClick={()=> props.toggleItem(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    )
    
}

export default Todo;