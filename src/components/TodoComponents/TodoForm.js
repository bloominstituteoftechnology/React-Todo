import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <form>
            <input value={props.inputText} onChange={props.handleInput} />
            <button onClick={props.add}>Add Todo</button>
            <button onClick={props.clearTodo}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;