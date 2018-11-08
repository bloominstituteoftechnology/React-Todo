//   _____                      
//  |  ___|__  _ __ _ __ ___  _ 
//  | |_ / _ \| '__| '_ ` _ \(_)
//  |  _| (_) | |  | | | | | |_ 
//  |_|  \___/|_|  |_| |_| |_(_)
                             

import React from 'react';

function TodoForm(props) {
    return (
        <form className="form" onSubmit={props.addTask}>
        <h1>Add Tasks:</h1>
            <input type="text" name="inputText" placeholder="add a task here!" value={props.inputText} onChange={props.changeHandler} /><br/>
            <div className="buttons">
                <button onMouseOver={props.pointer} type="submit">Add Task</button>
                <button onMouseOver={props.pointer} onClick={props.clearTasks}>Clear Completed</button>
            </div>
        </form>
    );
}

export default TodoForm;