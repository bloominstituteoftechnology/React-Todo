import React from 'react';
import './Todo.css';


const TodoForm = (props) => {

    return (
        <div>
            <input onChange={props.inputFunction} />
            <button onClick={props.submitFunction}>Add Todo</button>
            <button>Remove Completed</button>
        </div>
    )
};

export default TodoForm;