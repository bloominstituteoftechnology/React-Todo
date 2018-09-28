import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div>
            <input placeholder="...todo" onChange={props.inputHandle}/>
            <button onClick={props.clickHandle}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;