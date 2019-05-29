import React from 'react';

const TodoForm = ({taskTitle, handleChange, updateList}) => {
return (
    <form onSubmit={(e)=>updateList(e)}>
        <h4>Input Todos</h4>
        <input
        type='text'
        value={taskTitle}
        onChange={handleChange}
        />
        {/* <input
        type="button"
        value="Add Todo"
        onClick={updateList}
         /> */}
         <button type="submit">Add Todo</button>

        <input
        type="button"
        value="Clear Completed"
         />
    </form>
)
}

export default TodoForm;