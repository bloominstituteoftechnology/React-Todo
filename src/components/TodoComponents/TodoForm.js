import React from 'react';

const TodoForm = props => {
    console.log('boop');
    return (
        <form onSubmit = {props.addNew}>
        {}
        <input
            value = {props.taskName}
            type = 'text'
            name = 'taskName'
            placeholder = '...todo'
            onChange = {props.handleChanges}
        />
        <button type = 'submit'>Add Todo</button>
        <button type = 'reset'>Clear Completed</button>
        </form>
    )
}

export default TodoForm;