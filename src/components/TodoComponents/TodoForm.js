import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input type='text' />
            <button onClick={props.handleSubmit}>Add Todo</button>
        </div>
    );
}

export default TodoForm;