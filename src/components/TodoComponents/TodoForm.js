import React from 'react';
// test
function TodoForm(props){

    return (
        <form onSubmit={props.addTask}>
            <input name="task" onChange={props.handleChanges} value={props.task}/>
            <button type='submit'>Add</button>
            <button onClick={props.clearCompleted}>Clear</button>
        </form>
    )
}
export default TodoForm;