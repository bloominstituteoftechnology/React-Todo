import React from 'react';


const ToDoForm = props => {
    return (
        <form className='todo-form'>
            <input
                type='text'
                placeholder='...todo'
                name='inputListItem'
                value={props.inputItem}
                onChange={props.typedInput}
            />
            <button onClick={props.submitTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}
 
export default ToDoForm;