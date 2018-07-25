import React from 'react';
import './Todo.css';

const TodoForm = () => {
    return (
        <div className="form">
            <input type="text" placeholder="Add something you need to do!" />
            <button> Add Todo </button>
            <button> Clear Completed </button>
        </div>
    );
}

export default TodoForm;