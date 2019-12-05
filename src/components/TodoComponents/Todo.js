import React from 'react';


const Todo = props => {
    let addClassName = "todo";
    if (props.todo.complete) {
        addClassName = addClassName + " complete";
    }

    const handleClick = () => {
        props.toggleComplete(props.todo.id);
    }

    return (
        <div 
            onClick={handleClick}  
            className={addClassName}>
            <p>{props.todo.task}</p>    
        </div>
    )
}

export default Todo;