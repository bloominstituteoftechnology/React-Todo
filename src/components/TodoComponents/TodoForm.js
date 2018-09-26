import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input onChange={props.handleSubmit} onKeyPress={props.enterPressed} type='text' />
            <button onClick={props.buttonPressed}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
}

export default TodoForm;