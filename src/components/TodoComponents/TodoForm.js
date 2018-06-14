import React from 'react';

const TodoForm = props => {
    console.log(props);
    return (
        <div>
            <input type="text"/>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
};

export default TodoForm;