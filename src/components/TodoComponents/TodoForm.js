import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input onKeyPress={props.enterPressed} type='text' />
            <button onClick={props.handleSubmit}>Add Todo</button>
        </div>
    );
}

export default TodoForm;