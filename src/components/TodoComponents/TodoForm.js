import React from 'react';
// test
function TodoForm(props){

    return (
        <form onSubmit={props.addTask}>
            <input name="task" onChange={props.handleChanges} value={props.task}/>
            <input type='submit' value='Add' />
            <button>Clear</button>
        </form>
    )
}
export default TodoForm;