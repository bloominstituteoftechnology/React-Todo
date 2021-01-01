import React from 'react';



const Todo = (props) => {
    
    return(
        <div
            className={`${props.task.completed ? "strike" : ""}`}
            onClick={() => props.toggleTask(props.task.id)}
        >
            <h4>{props.task.task}</h4>
        </div>
    )
}


export default Todo;


// onClick make font style strike-through