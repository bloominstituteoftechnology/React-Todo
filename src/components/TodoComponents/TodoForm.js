import React from 'react';

function TodoForm (props) {
    return (
        <form>
            <input value={props.inputText} onChange = {props.handleInput}/>
            <button onClick = {props.addTask}>Add task</button>
            <button onClick = {props.clearComplete}>Clear Complete</button>
        </form>
        
    )
}

export default TodoForm;