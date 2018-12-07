import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props.todo)
    return (
    <div 
         onClick={ () => props.toggleTask(props.todo.id)} 
 className={props.todo.completed ? 'taskComplete' : 'taskNotComplete' }
    >
            <h2>{props.todo.todo}</h2>
    </div>
    );
};

export default Todo;