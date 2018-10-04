import React from "react";


const TodoForm = props => {
    return (
        <form className= 'form'>
            <input className = 'input'
                placeholder="Add tasks here..." 
                type="text" 
                name="todo" 
                value={props.value}
                onChange={props.handleChange} />
            <div className = 'buttons'>
                <button onClick={props.addTask}>Add Task</button>
                <button onClick={props.handleClearTodos}>Clear Completed</button>
            </div>
        </form>
    )
}
 export default TodoForm;
  