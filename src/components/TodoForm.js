import React from 'react';

const TodoForm = ({ handleChange, handleAdd, handleClear, taskTitle }) => {

    const onAdd = evt => {
        evt.preventDefault()
        handleAdd()
    };
    const onClear = evt => {
        evt.preventDefault()
        handleClear()
    };
    const onChange = evt => {
        const { value } = evt.target
        handleChange(value)
    };

    return (
        <div>
            <form>
                <input type='text' name='newTodo' onChange={onChange} value={taskTitle} />
                <button onClick={onAdd}>Add Todo</button>
                <button onClick={onClear}>Clear Completed</button>
            </form>
        </div>
    );
}

export default TodoForm;