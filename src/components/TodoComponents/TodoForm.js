import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <div>
            <input placeholder="Enter Todo" className="form" onChange={props.handleInput} value={props.value} type="text" name="todo" onKeyDown={event => {
                if(event.keyCode === 13) {
                    props.add(event);
                } 
                }}></input>
            <button onClick={props.add}>Add Todo</button>
            <button onClick={props.clear}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;