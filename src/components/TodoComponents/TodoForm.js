import React from 'react';
import Todo from './Todo';

const TodoForm = (props) => {
    console.log(props);
    return (
        <div className='todo-form-container'>
            <input type='text'/>
            <button onClick={props.addItem()}>Add todo</button>
            <button>Clear completed</button>
        </div>
    )
}

export default TodoForm;