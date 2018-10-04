import React from 'react';
import './Todo.css'

const Todo = ({todo, toggle}) => {
    const { task, completed} = todo;
    return (
        <div 
            className='todo' 
            onClick={() => toggle(todo.id)}
        >
            <div style={completed ? { textDecorationLine: 'line-through'} : {}}
            >{task}</div>
            <i className="far fa-check-square"style={completed ? {color: 'green'} : {color:'#18191C'}}
            ></i>
        </div>
    );
}

export default Todo;
