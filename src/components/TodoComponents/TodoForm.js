import React from 'react';


const TodoForm = () => { 
    return (
        <div className="to-do-form">
            <input type="text" placeholder="...todo"/>
            <button className="add-to-do">Add Todo</button> 
            <button className="clear-completed">Clear Completed</button>
        </div>

    );
}


export default TodoForm;