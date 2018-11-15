import React from 'react';


const Todo = props => {
    return (
        <div className='todo'
        style={props.todo.completed ? { textDecoration:'line-through'} : null}
        onClick={ () => props.handleToggleComplete(props.todo.id)}
        >
            {props.todo.task}
        </div>
    );   
}

export default Todo;

// const Todo = props => {
//     return <h1>{props.taskOnProps.taskName}</h1>;
// };