import React from 'react';

function TodoForm(props){

    return (
        <form name="task" onSubmit={props.handleChanges}>
            <input  />
            <input type='submit' value='Add' />
            <button>Clear</button>
        </form>
    )
}
export default TodoForm;