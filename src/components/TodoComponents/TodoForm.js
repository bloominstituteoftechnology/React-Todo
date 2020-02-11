  
import React from 'react';

const TodoForm = props => {
    return(
        <form>
            <label>Add Task:
            <input 
                onChange={props.handleChange} 
                name="todo" 
                value={props.value} 
            />
            </label>
            <button onClick={props.handleAdd}>Add</button>
            <button onClick={props.handleDelete}>Clear</button>
        </form>
    )

}
export default TodoForm