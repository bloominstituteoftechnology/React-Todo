import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input onChange={props.handleInput} value={props.textInput}  />
            <button onClick={props.handleAdd}>Add ToDo</button>
            <button onClick={props.handleClear}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;