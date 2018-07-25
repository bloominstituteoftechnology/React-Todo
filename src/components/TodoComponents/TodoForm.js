import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div className="form">
            <input type="text" placeholder="Add something you need to do!" onChange={props.onChange} />
            <button onClick={props.onSubmit}> Add Todo </button>
            <button> Clear Completed </button>
        </div>
    );
}

export default TodoForm;