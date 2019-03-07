import React from 'react';

function Todo(props) {
    let completed = props.task.completed ? ' completed' : '';
    return (
        <div
            className={`task ${completed}`}
            key={props.task.id}
            onClick={event => {
                props.toggleTask(props.taskItem.id);
            }}
        >
               
                   <p>{props.task.name}</p> 
                </div>
    );
}

export default Todo