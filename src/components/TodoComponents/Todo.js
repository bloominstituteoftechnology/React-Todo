import React from 'react';
import './Todo.css'

const Todo = ({todo, toggle}) => {
    const { task, completed} = todo;
    return (
        <div className='todo'>
            <div>{task}</div>
            <i 
                className="far fa-check-square"
                style={completed ? {color: 'green'} : {color:'red'}}
                onClick={toggle.bind(this, todo.id)}
            ></i>
        </div>
    );
}

export default Todo;
