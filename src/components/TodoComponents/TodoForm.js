import React from 'react';

const ToDoForm = props => {
    return (
        <form className=''>
            <input type="text"  placeholder="Enter your Todo List Item here" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ToDoForm;