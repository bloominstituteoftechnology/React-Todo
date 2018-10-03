import React, { Component } from 'react';


const TodoForm = (props) => {
    return (
        <div>            
            <input
                type="text"
                name="inputText"
                placeholder="...Todo"
                onChange={props.changeHandler}
                value={props.inputText}/>
            <button onClick={props.changeColor}>Add ToDo</button>
            <button onClick={props.changeColor}>Clear Completed</button>    
        </div>
    );
}

export default TodoForm;

