import React from 'react';

const TodoForm = props => (
    <div className='form'>
        <input type='text' name='input' placeholder='todo...' />
        <button className='add-btn'>Add Todo</button>
        <button className='clear-btn'>Clear Completed</button>
    </div>
);

export default TodoForm;