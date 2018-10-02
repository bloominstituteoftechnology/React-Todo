import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input placeholder="...todo"></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;