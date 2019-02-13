import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={props.task}
                    onChange={props.handleChanges}
                    placeholder="...Todo"
                ></input>
                <button onClick={props.addTask}>Add Todo</button>
                <button>Clear Completed</button>
            </form>
           
        </div>
    );
}

export default TodoForm;