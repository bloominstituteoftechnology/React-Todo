import React from 'react'

function TodoForm ({handleAdd, handleChange, value}) {
    return (
        <div >
            <input onChange={handleChange} type="text" placeholder="add todo" value={value} />
            <button onClick={handleAdd}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm