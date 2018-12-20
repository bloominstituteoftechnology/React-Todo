import React from 'react';

const TodoForm = props =>{
    return(
        <form onSubmit={props.submitHandler} className="todo-form">
            <input 
            type="text" 
            name="inputText" 
            onChange={props.eventHandler} 
            value={props.inputText}/>
            <div className="form-buttons">
            <button 
                onClick={props.submitHandler}
                >
                Add To List
                </button>
                <button
                onClick={props.clearCompleted}
                >
                Clear Completed
                </button>
            </div>
        </form>
    )
}

export default TodoForm;