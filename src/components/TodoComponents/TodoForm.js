import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <div>
            <input className={props.formStyle} placeholder={props.placeholder}/>
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.removeTodo}>Clear Completed</button>
        </div>
    );
}


export default TodoForm;