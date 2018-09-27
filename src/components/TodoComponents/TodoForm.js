import React from 'react'


const TodoForm = (props) => {
    return (
        <div>
            <input placeholder="To Do..." onKeyPress={props.addEnter}></input>
            <button onClick={props.addClick}>Add Item</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;