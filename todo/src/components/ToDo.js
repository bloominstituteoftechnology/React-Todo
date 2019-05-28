import React from 'react';
import '../index.css';



const ToDo = (props) => {
    return (
        <div className={props.todo.complete  ? "text-done": ""} onClick={()=> props.handleToggle(props.id)}>
            <div>
                {props.todo.todo} <span><button onClick={() => props.handleDelete(props.id)}>Delete</button></span>
            </div>
        </div>
    )
}

export default ToDo;
