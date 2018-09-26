import React from 'react';

const ToDoForm = (props) => {
    return (
        <form>
        <input value='...todo'></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form> 
    )
}

export default ToDoForm;