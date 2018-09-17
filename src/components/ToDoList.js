import React from 'react';

const ToDoList = (props) => {
    console.log(props.todos);
    return (
        <ul>
            <div className="form-submit">
            {props.todos.map(item => {
                return (
                    <div className="task-list">
                    <li key= {item.id}>
                    {item.todo} 
                    </li>
                    </div>
                )
            })}    
                
                
            </div>     
        </ul>

    )
}

export default ToDoList;