import React from 'react';
import './Todo.css';

const ToDoForm = (props) => {
    return (
        <div>
            <form>
                <input type="text" placeholder="What to do?" />
                <p>Submit</p>
                <p>Clear Completed</p>
            </form>
        </div>
    );
};

export default ToDoForm;