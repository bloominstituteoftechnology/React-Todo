import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div>

            <input onKeyPress={ props.onKeyPress }
            onChange={ props.onChange } type="text"  value={ props.value }/>

            <button onClick={ props.onClick }>Add Todo</button>
            <button onClick={ props.onClear }>Clear Completed</button>

        </div>
    );
}

export default TodoForm;

// onKeyPress={ props.onKeyPress }

