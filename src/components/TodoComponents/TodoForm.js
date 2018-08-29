import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return (
        <form>
            <input value={props.inputText} onChange={props.handleInput} />
            <button onClick={props.addTodo}>Add item</button>
            <button onClick={props.clearTodo}>Clear complete</button>
        </form>
    );
}

export default TodoForm;
