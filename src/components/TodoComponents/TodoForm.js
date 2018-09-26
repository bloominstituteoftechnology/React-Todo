import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input value={props.textInput} onChange={props.handleInput} />
            <button onClick={props.handleClick}>Add ToDo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;