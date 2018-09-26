import React from 'react';

const ToDoForm = (props) => {
    return (
        <form>
            <input placeholder='...todo' onClick={(e) => alert(e.target.value)}></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form> 
    )
}

export default ToDoForm;

