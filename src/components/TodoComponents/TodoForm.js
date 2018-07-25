import React from 'react';
import ReactDOM from "react-dom";

function TodoForm (props){
    return (
        <div>
            <input placeholder="...todo"/>
            <button>Add Todo</button>
            <button>Clear Completed Todo</button>
        </div>
    )
}

export default TodoForm