import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.clickHandler}>
            <input type="text" value={props.value} onChange={props.handleInput}></input>
            <button>Add todo</button>
            <button>Clear Completed</button>
        </form>
    )
        
}
 export default TodoForm; 