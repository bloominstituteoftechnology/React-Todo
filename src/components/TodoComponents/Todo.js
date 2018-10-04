import React from 'react';
import './Todo.css'

const Todo = ({todo, toggle}) => {
    const { task, completed} = todo;
    return (
        <div className='todo' onClick={() => toggle(todo.id)}>
            <div style={completed ? { textDecorationLine: 'line-through', color: 'rgb(64, 247, 168)'} : {}}
            >{task}</div>
            <i className="fa fa-check-square"style={completed ? {color: 'rgb(64, 247, 168)'} : {color:'rgb(247, 150, 64)'}}></i>
        </div>
    );
}

export default Todo;
