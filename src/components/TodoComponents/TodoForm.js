import React from 'react';

const TodoForm = props => (
    <form className='form' onSubmit={props.addTodo}>
        <input 
            type='text'
            name='input' 
            placeholder='todo...' 
            onChange={props.changeHandler}
            value={props.inputText}
        />
        <button className='add-btn' onClick={props.addTodo}>Add Todo</button>
        <button className='clear-btn'>Clear Completed</button>
    </form>
);

export default TodoForm;