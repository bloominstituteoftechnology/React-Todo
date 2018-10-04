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
                    autocomplete="off"
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
