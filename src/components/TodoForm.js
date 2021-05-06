import React from 'react'

const TodoForm = props => {
    return (
        <form>
            <input placeholder="...todo" onChange={props.updateListInput}></input>
            <button onClick={props.submitListItem}>Go!</button>
        </form>
    )
}

export default TodoForm;