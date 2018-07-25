import React from 'react';

import './TodoForm.css';

const TodoForm = props=> {
    return (
        <form className = "form-container">
            <input type = "text" name = "todo" value = {props.value} placeholder = "task here"/>
            <button>add task</button>
        <button>clear completed</button>
        </form>

        )
}

export default TodoForm