import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div className='todo-form-container'>
            <input value={props.textValue} onChange={props.textChanged} type='text'/>
            <button onClick={props.addItem}>Add todo</button>
            <button onClick={props.clearCompleted}>Clear completed</button>
        </div>
    )
}

export default TodoForm;