import React from "react";

const TodoForm = props => {
    return (
        <form>
            <input 
                placeholder="Add tasks here..." 
                type="text" 
                name="todo" 
                value={props.value}
                onChange={props.handleChange} />
            <button onClick={props.addTask}>Add Task</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    )
}
 export default TodoForm;
  