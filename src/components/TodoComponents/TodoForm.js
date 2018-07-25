import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input placeholder="Task To Do"/>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
};

export default TodoForm;