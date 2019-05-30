import React from 'react';

function Todo(props){

    return (
        <h2 className={`${props.todoProp.completed ? 'completed' : ''}`} onClick={()=> props.toggleTask(props.todoProp.id)}>{props.todoProp.task}</h2>
    )


}


export default Todo;