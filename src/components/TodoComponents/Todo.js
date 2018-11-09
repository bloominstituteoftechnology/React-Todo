import React from 'react';

const Todo = props =>{
    console.log('propsIntodo',props.completeHandle);
    return(
        <div>
            <p 
            className ="todolist-item"
            style={ props.todo.completed === false ? {textDecoration: "none"} : {textDecoration: "line-through"}  } 
            onClick ={() => props.completeHandle(props.todo.id)}> 
                { props.todo.task }
                </p>
        </div>
    );
};

export default Todo;
