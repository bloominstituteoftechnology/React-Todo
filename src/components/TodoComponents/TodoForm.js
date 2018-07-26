import React from 'react';
import ReactDOM from "react-dom";

function TodoForm (props){
    return (
        <div>
            <input placeholder="...todo" onChange={props.inputChange} id="myInput"/>
            <button onClick={props.dataChange}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed Todo</button>
        </div>
    )
}

export default TodoForm