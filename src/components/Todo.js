import React from 'react';

const Todo = (props) => {
    return (
        <>
        <div>
        <p  className={`${props.completed ? "completed" : "initial"}`}
            onClick={() =>props.toggleTask(props.id) }
            >
                {props.task}
                </p>
        </div>
            
        </>
    )
}

export default Todo;