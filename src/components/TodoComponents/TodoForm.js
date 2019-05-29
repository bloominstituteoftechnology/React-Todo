import React from 'react';

const TodoForm = ({newTask, handleChange, submitForm}) => {
return (
    <form>
        <h4>Input Todos</h4>
        <input
        type='text'
        value={newTask}
        // onChange={handleChange}
        />
        <input
        type="button"
        value="Submit"
        // onClick={submitForm}
         />
    </form>
)
}

export default TodoForm;