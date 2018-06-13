import React from 'react'

function TodoForm ({handleAdd, handleChange, value}) {
    return (
        <div className="todo-form">
            <input onChange={handleChange} type="text" placeholder="add todo" />
            <button onClick={handleAdd}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm