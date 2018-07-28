import React from 'react';

const TodoForm = props => {
    return (
    <div>
        <input type="text" placeholder="Enter Text" />
        <button>Add ToDo</button>
        <button>Clear Completed</button>
    </div>
    )
}

export default TodoForm;