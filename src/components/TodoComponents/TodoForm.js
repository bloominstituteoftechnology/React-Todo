import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return (
        <form>
            <input value={props.inputText} onChange={props.handleInput} onKeyPress={props.handleKeyPress} />
            <button onClick={props.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;