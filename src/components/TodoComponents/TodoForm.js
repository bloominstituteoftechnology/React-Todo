import React from 'react'

const TodoForm = props => {
    return (
    <form>
        <div>
            <h3>Enter your Todo</h3>
            <input type="text"
                value={props.title}
                name="title"
                placeholder="Title"
                onChange={props.handleChanges}
            />
            <button onClick={props.updateList}>Add Todo</button>
        </div>
    </form>
    )
}

export default TodoForm