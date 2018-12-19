import React from 'react';

const TodoForm = props =>{
    return(
        <form onSubmit={props.submitHandler}>
            <input 
            type="text" 
            name="inputText" 
            onChange={props.eventHandler} 
            value={props.inputText}/>
            <button onClick={props.submitHandler}>Add To List</button>
            <button onClick={props.submitHandler}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;