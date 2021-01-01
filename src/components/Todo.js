import React from 'react';


const Todo = (props) => {
    console.log("Props", props)
    return(
        <div>
            <h4>{props.tasks.task}</h4>
            <p>{props.tasks.completed}</p>
        </div>
    )
}


export default Todo;