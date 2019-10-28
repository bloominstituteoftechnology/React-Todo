import React from 'react';

const Todo = props => {

    return(

        <div className={`Task${props.item.completed ? 'Completed' : ''}`} 
        onClick ={() => props.toggleTodos(props.item.task)}>
            
            <p>{props.item.task}</p>

        </div>
    )
}

export default Todo;