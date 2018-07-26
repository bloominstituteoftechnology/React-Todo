import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <div className="form">
            <input placeholder="Enter Todo" className="inputField" onChange={props.handleInput} value={props.value} type="text" name="todo" onKeyDown={event => {
                if(event.keyCode === 13) {
                    props.add(event);
                } 
                }}></input>
            <button onClick={props.add} className="addButton">Add Todo</button>
            <button onClick={props.clear} className="clearButton">Clear Completed</button>
        </div>
    )
}

export default TodoForm;