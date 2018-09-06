import React from 'react';

const ToDoForm = props => {
    return (
        <form>
            <input
            onChange={props.handleToDoChange}
            name="todo"
            value={props.value}
            placeholder="Add ToDo Task"
            />
    <button onClick={props.handleAddToDo}>Add Task</button>
    <button>Clear</button>
        </form>
        );
    };

export default ToDoForm;