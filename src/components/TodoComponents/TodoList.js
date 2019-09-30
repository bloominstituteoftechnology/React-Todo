import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <>
        <h2>To-Dos:</h2>
        <ul>
            {props.tasks.map(task => 
                <Todo task={task} key={task.id}/>)}
        </ul>
        </>
    )
}

export default TodoList