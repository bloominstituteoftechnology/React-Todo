import React from 'react'

function TodoForm ({handleAdd, handleChange, handleClear}) {
    return (
        <div className="todo-form">
            <input onChange={handleChange} type="text" placeholder="add todo" />
            <button onClick={handleAdd}>Add Todo</button>
            <button onClick={handleClear}>Clear Completed</button>
        </div>
    )
}

export default TodoForm