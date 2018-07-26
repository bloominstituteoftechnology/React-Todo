import React from 'react';


const TodoForm = () => {
    return (
        <div>
            <input
            placeholder="Enter Todo"
            onChange={this.formHandler}
            />
        <button>Add ToDo</button>
        <button>Clear Completed</button>
        </div>
    );
};

export default TodoForm;