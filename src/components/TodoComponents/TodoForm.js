import React from 'react';

// Custom Button
const TodoForm = props => {
    return (
        <div className="my-form">
            <input placeholder="...todo" />
            <button className="add-button custom-button">Add Todo</button>
            <button className="clear-button custom-button">Clear Completed</button>
        </div>
    );
};

export default TodoForm;