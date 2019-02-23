import React from 'react';

const TodoForm = props => {
    return (
    <div>
            <div className="introBox">
                <p>Hello and welcome to your new Task Management System</p>
            </div>

        <div className="formContainer">
            
            <div className="formDiv">
        
                <form onSubmit={props.addNewTask}>
                <input 
                type="text" 
                value={props.inputTask}
                name="inputTask"
                onChange={props.changeHandler}
                placeholder="Enter new task here"
                />
                <button type="submit" onClick={props.addNewTask}>Add Task</button>
                </form>

                <button onClick={props.clearTask}>Clear Completed Tasks</button>

            </div>

        </div>

    </div>
    )
}

export default TodoForm;

