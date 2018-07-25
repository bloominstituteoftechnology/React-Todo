import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.onSubmitButton} className="toDoForm">
            <input className="toDoInput" type="text" placeholder="Add something to do!" onChange={props.onChange} />
            <div className="buttons">
                <button className="add" onClick={props.onSubmitButton}> Add </button>
                <button className="clear" type="button" onClick={props.onClear}> Remove </button>
            </div>
        </form>
    );
}

export default TodoForm;