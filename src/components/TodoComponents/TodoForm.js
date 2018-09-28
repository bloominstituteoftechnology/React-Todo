import React from 'react'
import './Todo.css'
const TodoForm = (props) => {
    return (
        <div className='form'>
            <input value={props.control} onChange={props.inputHandler}  />
            <button onClick={props.handleClick1} > Add Todo</button>
            <button onClick={props.clearField}>Clear text field</button>
            <button onClick={props.clearCompleted}> Clear Completed</button>
        </div>
    )
}

export default TodoForm