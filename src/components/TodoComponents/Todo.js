import React from 'react';

function Todo (props) {

    return (
       
        <div className="todo-item">
            <input type="checkbox"/>
        
            <p>{props.task.task}</p>
    
        </div>
    )
}

export default Todo;