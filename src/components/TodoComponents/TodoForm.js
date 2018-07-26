import React from 'react';
import './Todo.css'

const TodoForm = props => {
    return (
        <form>
            <input 
                onChange={props.handleInputChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="...todo"
            />
            <button onClick={props.handleAddTodo} className={`btn ${props.className}`}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;