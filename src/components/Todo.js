import React from 'react'

const Todo = props =>  {



    return (
        <div className={`task${props.task.completed ? 'Completed' : ''}`} >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo