import React from 'react';

const TodoForm = ({taskTitle, handleChange, updateList, searchQuery, formType}) => {
return (
    formType === 'Add Task'?
    <form onSubmit={(e)=>updateList(e)}>
        <h4>{formType}</h4>
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
    </form> :
    <form>
    <h4>{formType}</h4>
    <input
    type='text'
    value={taskTitle}
    onChange={searchQuery}
    />
</form>
)
}

export default TodoForm;