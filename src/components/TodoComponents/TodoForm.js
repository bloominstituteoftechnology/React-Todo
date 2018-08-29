import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return (
        <form className='form-group'>
            <div className='input-text'>
                <input value={props.inputText} onChange={props.handleInput} />
            </div>
            <div className='btn'>
                <button className='todo' onClick={props.addTodo}>Add Todo</button>
                <button className='clear' onClick={props.clearCompleted}>Clear Completed</button>
            </div>
        </form>
    );
};

export default TodoForm;