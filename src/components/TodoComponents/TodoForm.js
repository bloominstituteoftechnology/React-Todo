import React from "react";
import './Todo.css';

const TodoForm = props => {
    return (
        <form onSubmit={props.addItem}>
            <input
                type='text'
                name='inputValue'
                placeholder='Add new item to the list here'
                value={props.inputValue}
                onChange={props.handleChange}
            />
            <button type='submit'>Add to List</button>
        </form>
    )
}

export default TodoForm;