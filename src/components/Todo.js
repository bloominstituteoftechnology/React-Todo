import React from 'react';
import './Todo.css';

const Todo = props => {
 
        return (
            <div 
                className={`todo${props.todo.completed ? ' completed' : ''}`}
                onClick={() => props.toggleCompleted(props.todo.id)}>
                <h2>{props.todo.task}</h2>
            </div>
           
        )

}

export default Todo