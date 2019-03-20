import React from 'react'

const TodoForm = props => {
    return (
    <form>
        <div>
            <h3 className="form-header">Add new Todo</h3>
            <input type="text"
                value={props.title}
                name="title"
                placeholder="Add your todo"
                onChange={props.handleChanges}
            />
            <button onClick={props.updateList}>Add</button>
        </div>
    </form>
    )
}

export default TodoForm