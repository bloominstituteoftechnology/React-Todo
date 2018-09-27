import React from 'react'
const TodoForm = (props) => {
    return (
        <div>
            <input value={props.control} onChange={props.inputHandler}  />
            <button onClick={props.handleClick1} > Add Todo</button>
            <button onClick={props.clearField}>Clear text field</button>
            <button onClick={props.handleClick2}> Clear Completed</button>
        </div>
    )
}

export default TodoForm