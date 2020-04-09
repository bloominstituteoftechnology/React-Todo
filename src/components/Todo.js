import React from 'react';

//import './components/todo.css'

const Todo = props => {
    // console.log('Todo.js Props', props) 
    return (
        <div
            className={`task${props.todo.completed ? " completed" : ""}`}
            onClick={() => props.toggleItem(props.todo.id)}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;
