import React from 'react'
import './Todo.css'
const TodoForm = (props) => {
    return (
        <div className='form'>
            <input value={props.control} onChange={props.inputHandler}  />
            <button onClick={props.addTodo} > Add Todo</button>
            <button onClick={props.clearCompleted}> Clear Completed</button>
        </div>
    )
}

export default TodoForm