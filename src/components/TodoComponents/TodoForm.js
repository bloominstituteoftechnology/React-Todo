import React from 'react';

const ToDoForm = props => {
    return (
        <form onSubmit={props.addNewTask}>
                    <input 
                    type = "text"
                    name = "newTask"
                    onChange={props.changeHandler}
                    placeholder = "...todo"
                    value={props.newTask}
                    />
                    <button type="submit" onClick={props.addNewTask}>
                    Add Todo
                    </button>
                    <button type="submit" onClick={props.clearTask}>
                    Clear Completed
                    </button>
            </form>
    );
}

export default ToDoForm;