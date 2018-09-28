import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input value={props.textInput} onChange={props.handleInput} />
            <button onClick={props.handleAdd}>Add ToDo</button>
            <button onClick={props.handleClear}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;