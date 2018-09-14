import React from 'react';

const ToDoList = (props) => {
    console.log(props.todos);
    return (
        <ul>
            <div className="form-submit">
            {props.todos.map(item => {
                return (
                    <li key= {item.id}>
                    {item.title}
                   
                    {item.subtasks.map(subtask => {
                        return (
                            <div className="subtasks">
                                <li key={subtask.title}className="subtask-list">{subtask}</li>
                            </div>
                            
                        )
                   
                    })}
                    </li>
                )
            })}    
                
                
            </div>     
        </ul>

    )
}

export default ToDoList;