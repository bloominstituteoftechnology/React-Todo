import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div>
            <input placeholder="...todo" onChange={props.inputHandle} />
            <button onClick={props.clickHandle}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;