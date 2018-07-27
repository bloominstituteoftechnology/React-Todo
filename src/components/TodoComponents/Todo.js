import React from 'react';


const Todo = props => {
   return(
    <div
    // style={props.todo.completed ? {textDecoration: 'line-through'} :null}
    onClick={() => props.handleToggleComplete(props.id)} className= {props.completed ? 'line-through' : null}
    >
    <h2>{props.task}</h2>
    </div>
    );
};

export default Todo;