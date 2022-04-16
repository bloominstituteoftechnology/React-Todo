import React from 'react'
import './Todo.css';

function Todo (props) {
        return (
            <div onClick={() => props.toggleTodo(props.todo.id)} className={`todo${props.todo.completed ? ' completed' : ''}`}>
                <h3>{props.todo.task}</h3>
            </div>
        )
}
export default Todo

