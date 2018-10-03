import React from 'react';

const TodoForm = ({task, addTask, onChange, clear}) => {
    return (
        <div>
            <form onSubmit={addTask.bind(this)}>
                <input 
                    type="text"
                    name="task"
                    placeholder="todo..."
                    value={task}
                    onChange={onChange.bind(this)}
                />
                <button>Submit</button>
            </form>
            <button
                onClick={clear.bind(this)}
            >Clear Completed</button>
        </div>
    );
}

export default TodoForm;
