import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.onSubmitButton}>
            <input type="text" placeholder="Add something you need to do!" onChange={props.onChange} />
            <button onClick={props.onSubmitButton}> Add Todo </button>
            <button type="button" onClick={props.onClear}> Clear Completed </button>
        </form>
    );
}

export default TodoForm;