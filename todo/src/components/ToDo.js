import React from 'react';
import '../index.css';



const ToDo = (props) => {
    return (
        <li className={props.todo.complete  ? "text-done": "list-item"} onClick={()=> props.handleToggle(props.id)}>
            <div>
                {props.todo.todo}
            </div>
        </li>
    )
}

export default ToDo;
