import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addTask}>
                <input
                    type="text"
                    value={props.task}
                    onChange={props.handleChanges}
                    placeholder="...Todo"
                ></input>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
           
        </div>
    );
}

export default TodoForm;