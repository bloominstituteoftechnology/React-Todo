import React from 'react'

function TodoForm () {
    return (
        <form>
            <input type="text" placeholder="add todo" />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm