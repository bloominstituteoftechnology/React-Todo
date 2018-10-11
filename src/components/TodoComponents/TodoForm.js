import React from 'react';


const ToDoForm = () => {
    return (
        <div className='to-do-form'>
        <input 
            type='text'  
            placholder='...todo'
            />
        <button>Add Todo</button>
        <button>Clear Completed</button>
        </div>
    );
};

export default ToDoForm;