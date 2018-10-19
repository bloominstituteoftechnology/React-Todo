import React from 'react';
import './Todo.css';

const TodoForm = () => {
    return (
        <div className='to-do-form'>

            <input type='text' />
            <button>Submit</button>
            <button>Add Todo</button>
            <button>Clear Completed</button>

        </div>
    );

};

export default TodoForm;