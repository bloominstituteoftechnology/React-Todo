import React from 'react';
import './Todo.css';

const TodoForm = () =>{
    return(
        <div>
            <input placeholder='Todo task' onChange={this.handleInputChange} />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;