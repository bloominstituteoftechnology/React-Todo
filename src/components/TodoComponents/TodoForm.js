import React from 'react';
import todo from './Todo'


const TodoForm = props => {
    return (
        <div>
            <input type="text" placeholder="...to do" onChange={this.handleInputChange} />
            <button onClick={this.handleUpdateState}>Add ToDo</button>
            <button>Clear Completed </button>
        </div>
    );
};

export default TodoForm;