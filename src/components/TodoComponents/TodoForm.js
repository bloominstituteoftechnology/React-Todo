import React from 'react';

const TodoForm = props => {
    return (
        <div className='todo-form-container'>
            <input value={props.userInput} onChange={props.handleSubmit} onKeyPress={props.enterPressed} type='text' placeholder='what to do?' />
            <button onClick={props.buttonPressed}>Add Todo</button>
            <button className='clear' onClick={props.clearList}>Clear Completed</button>
        </div>
    );
}

export default TodoForm;