import React from 'react'


const TodoForm = (props) => {
    return (
        <div className="form">
            <input placeholder="To Do..." onKeyPress={props.addEnter}></input>
            <button onClick={props.addClick}>Add Item</button>
            <button onClick={props.deleteItems}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;