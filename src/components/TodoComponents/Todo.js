import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div className="toDoContainer">
                <div className ="formOptions">
                <input  type="text" placeholder ="Add to list"/> 
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        </div>
    );
}

export default Todo;