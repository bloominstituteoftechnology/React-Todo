import React from 'react';

const TodoForm = props => {
    console.log('boop');
    return (
        <form className = 'form' onSubmit = {props.addNew}>
        {}
        <input
            value = {props.taskName}
            type = 'text'
            name = 'taskName'
            placeholder = 'Enter Task Here'
            onChange = {props.handleChanges}
            className = {'input-field'}
        />
        <button type = 'submit'>Add Task</button>
        <button onClick={props.clear}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;