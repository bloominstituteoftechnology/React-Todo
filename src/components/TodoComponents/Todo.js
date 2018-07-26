import React from 'react';



const Todo = props => {
    
    return(
        <div
            onClick = {() => props.handleComplete(props.todos.id)}
            style = {props.todos.completed ? {textDecoration: 'line-through'} : null}
        >
            {props.todos.task}
        </div>
    );   
};


export default Todo;