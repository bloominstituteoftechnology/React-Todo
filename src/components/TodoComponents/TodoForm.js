import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input 
                type="text"
                value={props.task}
                placeholder="Item"
                onChange={props.handleChanges}
            />
            <button onClick={props.handleClick}>Add</button>
        </form>
    )
}

export default TodoForm