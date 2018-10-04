import React from 'react';


const Todo = props => {
    return(
        <div>
        <h1>Task Entry: {props.inputText}</h1>
        {props.taskData.map(item => {
            return (
            
            <div className="task" key={item.id}>
            <p>TaskId: {item.id}</p>
             <p>Task: {item.task}</p>
            </div>
         );
        })}
    </div>
    );
}

export default Todo;