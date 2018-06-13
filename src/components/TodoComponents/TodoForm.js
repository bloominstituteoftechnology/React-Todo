import React from 'react';

const TodoForm = () => {
    return (
        <div>
            <input 
                type="text"
                placeholder="...todo"
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm