import React from 'react';
import { EventEmitter } from '../../utils.js'


const Todo = ({item}) => (
    <h3 
        className={item.completed ? 'complete' : 'incomplete'} 
        onClick={() => EventEmitter.dispatch('toggleTodo', item.task)}
    >{item.task}</h3>
);

export default Todo;