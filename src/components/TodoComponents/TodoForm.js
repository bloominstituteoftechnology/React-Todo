import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input 
                type="text"
                value={props.task}
                placeholder="Add new item"
                onChange={props.handleChanges}
            />
            <button onClick={props.updateList}>Add</button>
            <button onClick={props.updateList}>Remove</button>
        </form>
    )
}

export default TodoForm