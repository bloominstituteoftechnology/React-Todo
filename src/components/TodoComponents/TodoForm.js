import React from 'react';

const TodoForm = ({task, addTask, onChange}) => {
    return (
        <div className="form-container">
            <form onSubmit={addTask} className="add-form">
                <input 
                    type="text"
                    name="task"
                    placeholder="todo..."
                    value={task}
                    onChange={onChange}
                    autoComplete="off"
                    maxLength="20"
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoForm;
