import React from 'react';
import { EventEmitter } from '../../utils.js'


const Todo = ({item}) => (
    <div className='todo'>
        <h3 
        className={item.completed ? 'complete' : 'incomplete'} 
        onClick={() => EventEmitter.dispatch('toggleTodo', item.id)}
        >{item.task}</h3>
    </div>
);

export default Todo;