import React from 'react';


const Todo = props => {
    return(
        <div className = 'todo'>
        <h2>{props.todos.task}</h2>
        
        </div>

    );
}



export default Todo;