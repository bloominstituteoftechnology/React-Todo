import React from 'react';

const TodoForm = props => {
    return (
        <form action="">
            <input 
            type="text"
            name="todo"
            placeholder="...todo"
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;