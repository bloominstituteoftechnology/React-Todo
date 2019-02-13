import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addTask}>
                <input
                    type="text"
                    value={props.task}
                    onChange={props.handleChanges}
                    placeholder="Task"
                ></input>
            </form>
           
        </div>
    );
}

export default TodoForm;