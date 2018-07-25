import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <div>
        <input className={props.formStyle} placeholder={props.placeholder}/>
        <button onClick={this.todo}>Add Todo</button>
        <button>Clear Completed</button>
        </div>
    );
}


export default TodoForm;