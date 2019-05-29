import React from 'react';

const TodoForm = ({taskTitle, handleChange, updateList}) => {
return (
    <form>
        <h4>Input Todos</h4>
        <input
        type='text'
        value={taskTitle}
        onChange={handleChange}
        />
        <input
        type="button"
        value="Submit"
        onClick={updateList}
         />
    </form>
)
}

export default TodoForm;