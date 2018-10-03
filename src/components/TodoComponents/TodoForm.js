import React from 'react';

let Form = props => {
    return (
    <form id="form" autoComplete="off">
        <input id="input" type="text" placeholder="Just drop a task here to get started!" value={props.value} name='newTodo' onChange={props.changeHandler}/>
        <div className="buttons">
            <button id="addTask" onClick={props.addTodo}>Add Task</button>
            <button id="clearCompleted" onClick={props.clearTodos}>Clear Completed Tasks</button>
        </div>
    </form>
    )
}

export default Form;