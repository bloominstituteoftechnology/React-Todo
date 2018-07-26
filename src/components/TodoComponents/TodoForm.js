import React from 'react';
import './Todo.css';

const TodoForm = props =>{
    return(
        <div>
            <input placeholder='Todo task' onChange={props.handle} />
            <button onClick={props.update}>Add Todo</button>
            <button onClick={props.remove}>Clear Completed</button>
        </div>
    );
}

export default TodoForm;