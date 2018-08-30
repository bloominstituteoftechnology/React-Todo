import React from 'react';

function TodoForm (props) {
    return (
        <form>
            <input name="inputText" placeholder="add task..." value={props.inputText} onChange = {props.handleInput}/>
            <input name="inputTextSearch" placeholder="search task..." value={props.inputTextSearch} onChange = {props.handleInput}/>
            <div className="buttons">
                <button className ="button" onClick = {props.addTask}>Add task</button>
                <button className ="button" onClick = {props.searchTask}>Search Tasks</button>
                <button className ="button" onClick = {props.clearComplete}>Clear Complete</button>
                
            </div>
            
        </form>
        
    )
}

export default TodoForm;