import React from 'react';
import './Todo.css';

const TodoForm = (props) =>{
    return(
        <div className={props.class}>
            <input placeHolder="..ToDo" value={props.task}></input>
            <button onClick={props.click} className={props.class}>Add Task</button>
            <button onClick={props.click} className={props.class}>Cleat completed</button>
        </div>
    );
}
export default TodoForm;