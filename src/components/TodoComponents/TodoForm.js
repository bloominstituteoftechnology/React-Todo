import React from 'react';


const ToDoForm = props => {
    return (
        <div className='todo-form'>
            <input
                type='text'
                placeholder='...todo'
                value={props.inputItem}
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
}
 
export default ToDoForm;