import React from 'react';



const Todo = props => {

    return(
    <div className = {`task${props.completed ? 'completed' : '' }`}
    onClick={() => props.toggleTodos(props.task)}
     key ={props.id}>
        <h1>{props.task}</h1>
    </div>)
    
}
export default Todo;