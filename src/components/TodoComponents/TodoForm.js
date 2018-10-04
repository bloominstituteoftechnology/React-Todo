import React from 'react';
import { EventEmitter } from '../../utils.js'

const TodoForm = ({changeHandler, inputText}) => (
    <form className='form' onSubmit={event => EventEmitter.dispatch('addTodo', event)}>
        <input 
            className='input'
            type='text'
            name='input' 
            placeholder='enter task' 
            onChange={changeHandler}
            value={inputText}
            required
        />
        <div className='btn-container'>
            <button className='btn' onClick={event => EventEmitter.dispatch('addTodo', event)}>add todo</button>
            <button className='btn' onClick={event => EventEmitter.dispatch('clear', event)}>clear completed</button>
        </div>
    </form>
);

export default TodoForm;