import React from 'react';

function TodoForm(props) {
    return (
        <form className="form" onSubmit={props.addTask}>
            <input type="text" name="inputText" placeholder="add a task here!" value={props.inputText} onChange={props.changeHandler} /><br/>
            <button type="submit">Add Task</button><br/>
            <button onClick={props.clearTasks}>Clear</button><br/>
        </form>
    );
}

export default TodoForm;