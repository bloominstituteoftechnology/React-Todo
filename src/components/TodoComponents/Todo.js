import React from 'react';
import './Todo.css'


const Todo  = props => {
    return (
        <div>
            <h4 onClick={() => props.toggleCompleted(props.id)} className={props.completed === true ? 'completedTodo' : null}>{props.task}</h4>
        </div>
    )
 }





export default Todo;