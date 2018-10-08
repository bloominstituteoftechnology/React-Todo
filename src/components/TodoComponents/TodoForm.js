import React from 'react';

const TodoForm = props => {
    return (
        <form action="">
            <div className="todo-form">
                <input onChange={props.onChangeInput} value={props.valueOfState} placeholder="Input task here!" />
                <button onClick={props.clickEvent}>Add Task to your "To Do" List!</button>
                <button onClick={props.clearCompleted}>Clear Completed Tasks!</button>
            </div>
        </form>
    )
}

export default TodoForm;