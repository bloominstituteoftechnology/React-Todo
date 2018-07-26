import React from 'react';
import ReactDOM from "react-dom";

function TodoForm (props){
    return (
        <div>
            <div className="inputContainer">
                <input placeholder="Add todo" onChange={props.inputChange} id="myInput"/>
                <button onClick={props.dataChange}>Add Todo</button>
                <button onClick={props.clearCompleted}>Clear Completed Todo</button>
            </div>
            <div className="searchContainer">
                <input placeholder="search" onChange={props.sInputChange} id="searchInput"/>
                <button onClick={props.sdataChange}>Search</button>
                <button onClick={props.sclearCompleted}>Clear Search</button>
            </div>
        </div>
    )
}

export default TodoForm