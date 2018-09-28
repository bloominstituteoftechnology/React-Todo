import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input type="text" value={props.value} onChange={props.handleInput}></input>
            <button onClick={props.handleClick}>Add todo</button>
            <button>Clear Completed</button>
        </form>
    )
        
}
 export default TodoForm; 