import React from 'react';


const ToDoForm = props => {
    console.log(props)
    return (
        <form className='todo-form'>
            <input
                type='text'
                placeholder='...todo'
                name='add-todo-input'
                value={props.inputItem}
                onChange={props.typedInput}
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}
 
export default ToDoForm;