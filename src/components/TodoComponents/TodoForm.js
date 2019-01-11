import React from 'react';

const TodoForm = (props) => {
    return (
        <form className='formContainer' onSubmit={props.addTodo}>
            <input className='form--input' type='text' name='todo' placeholder='...todo' value={props.todo} onChange={props.handleChanges}/>
            <button className='form--btn'>Add Todo</button>
            <button className='form--btn' onClick={props.clearTodo}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;