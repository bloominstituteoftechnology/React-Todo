import React from 'react';

const TodoForm = props => {
    return (
    <form>
        <input type="text" placeholder="Enter Text" onChange={props.handleInput} name="input" value={props.value} />
        <button onClick={props.handleAddItem}>Add ToDo</button>
        <button>Clear Completed</button>
    </form>
    );
};

export default TodoForm;