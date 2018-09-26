import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.clickHandler}>
            <input type="text" placeholder="...todo" value={props.value} onChange={props.inputHandler}></input>
            <button>Add todo</button>
            <button>Clear Completed</button>
        </form>
    )
        
}

export default TodoForm;