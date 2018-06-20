import React from 'react';


const ToDoForm = () => {
    return (
        <div className='todo-form'>
            <input
                type='text'
                placeholder='...todo'
                value={}
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
}
 
export default ToDoForm;