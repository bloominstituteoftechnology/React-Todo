import React from 'react';

const TodoForm = props => {
    return (
        <div>
        <form onSubmit={props.addTask}>
            <input 
            type="text" 
             name="inputText"
             placeholder="New Task"
             onChange={props.changeHandler}
             value={props.inputText} />
            
                <button type="submit" onClick={props.addTask}>Add Task</button>
                <button type="submit" >Clear Completed</button> 
        </form>
        </div>
    )
}

export default TodoForm;