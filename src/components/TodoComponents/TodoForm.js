import React from 'react';

const TodoForm = ({currentTask, addTask, onChange}) => {
    return (
        <div>
            <form onSubmit={addTask.bind(this)}>
                <input 
                    type="text"
                    value={currentTask}
                    onChange={onChange.bind(this)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
