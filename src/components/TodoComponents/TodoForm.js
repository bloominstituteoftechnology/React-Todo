import React from 'react';

const TodoForm = props => {
    return(
        <div className='todo-form'>
        <form onSubmit={props.addTask}>
        <input
            type='text'
            name='inputText'
            placeholder='add new task'
            value={props.inputText}
            onChange={props.handleChange}
        />    
        </form>
        Hello I am the todo form
        </div>
    );
}


export default TodoForm;