import React from 'react';
import { EventEmitter } from '../../utils.js'

const TodoForm = ({changeHandler, inputText}) => (
    <form className='form' onSubmit={event => EventEmitter.dispatch('addTodo', event)}>
        <input 
            type='text'
            name='input' 
            placeholder='todo...' 
            onChange={changeHandler}
            value={inputText}
            required
        />
        <button className='add-btn' onClick={event => EventEmitter.dispatch('addTodo', event)}>Add Todo</button>
        <button className='clear-btn' onClick={() => EventEmitter.dispatch('clear')}>Clear Completed</button>
    </form>
);

export default TodoForm;