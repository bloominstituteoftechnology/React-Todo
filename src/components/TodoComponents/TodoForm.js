import React from 'react';

let Form = props => {
    return (
    <form id="form" autoComplete="off">
        <input type="text" placeholder="What do you need to do?" value={props.value} name='newTodo' onChange={props.changeHandler}/>
        <button onClick={props.addTodo}>Add Task</button>
        <button onClick={props.clearTodos}>Clear Completed</button>
    </form>
    )
}

export default Form;