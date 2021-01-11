import React from 'react';

const Todo = props =>{

    const handleClick= () =>{
        props.handleTodoToggle(props.todo.id);
    }

    return(
        <div onClick={handleClick} className={`todo${props.todo.completed ? ' completed' : ''}`}>
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;